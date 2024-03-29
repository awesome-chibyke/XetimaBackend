const responseObject = require("./ViewController");//for management of data to be sent to view
const Settings = require("../model/Settings");
const DbActions = require("../model/DbActions");
const AuthenticationCode = require("../helpers/AuthenticationCode");
const MessageType = require("../helpers/MessageType");
const ErrorHandler = require("../helpers/ErrorHandler");
const ForgotPasswordTemplate = require("../Emails/EmailTemplates/ForgotEmailTemplate");
const GenericMailTemplate = require("../Emails/EmailTemplates/GenericMailTemplate");
const User = require("../model/User");
const date = require("date-and-time");
const validator = require("../helpers/validator");
const TokenManager = require("../model/TokenManager");
const PasswordHasher = require("../helpers/PasswordHasher");
const twilio = require("twilio");

//for mail sending
var mailler = require("../Emails/MailAccount");
const MailSetups = require("../Emails/MailSetups");


class ForgotPasswordController {

    constructor() {
        this.responseObject = new responseObject();
        this.User = new User();
        this.AuthenticationCode = new AuthenticationCode();
        this.now = new Date();
        this.Settings = new Settings();
        this.errorMessage = '';
        this.errorStatus = true;
        this.DbActions = new DbActions();
        this.MessageType = new MessageType();
        this.TokenManager = new TokenManager();
        this.passwordController = new PasswordHasher();
    }

    valdateFunction(req, ValidationRule){

        validator(req.body, ValidationRule, {}, (err, status) => {
            if (status === false) {
                this.errorMessage = err;
            }
            this.errorStatus = status;
        })
    }

    //send message to email and phone number
    async sendForgotPasswordMessage(req, res){
        try{
            //validation
            let validationRule = {
                email: "required|string"
            };

            this.valdateFunction(req, validationRule);
            if(this.errorStatus === false){
                this.responseObject.setStatus(false);
                this.responseObject.setMessage(this.errorMessage.errors);
                return res.json(this.responseObject.sendToView());
            }

            //get the user email from request
            const email = req.body.email;

            //check if the user email exists
            let selectedUserObject = await this.User.selectOneUser([
                ["email", "=", email],
            ]);
            if (selectedUserObject === false) {
                throw new Error("Email does not exist");
            }

            //initialize the respose message variable and the messagetype variable
            let responseMessage =  '', messageType = 'normal';

            //check if the user uses email auth or a factor auth

            if(selectedUserObject.auth_type === 'email'){
                //generate a token
                //create the activation code
                let activationCode = await this.AuthenticationCode.createActivationCode(
                    selectedUserObject,
                    this.AuthenticationCode.forgot_password_type
                );
                if (activationCode.status === false) {
                    throw new Error(activationCode.message);
                }

                let token = activationCode.data;//the token

                //send email to the user
                await this.prepareForgotPasswordMailMessage(selectedUserObject, token, this.AuthenticationCode.code_expiration_time);
                responseMessage = "A password reset mail have been sent to your email address";
                messageType = this.MessageType.returnMessageType('forgot_password_email_auth');//get the message type

            }else{
                responseMessage = "Please Enter Code Generated By Your Authentication App";
                messageType = this.MessageType.returnMessageType('forgot_password_auth_app');//get the message type
            }

            //send the response to the view
            this.responseObject.setMesageType(messageType);
            this.responseObject.setData({email: selectedUserObject.email });//set the datas to be sent to view
            this.responseObject.setStatus(true);
            this.responseObject.setMessage(responseMessage);
            res.status(200).json(this.responseObject.sendToView());

        }catch(err){
            this.responseObject.setStatus(false);
            this.responseObject.setMessage({
                general_error: [ErrorHandler(err)],
            });
            res.json(this.responseObject.sendToView());
        }
    }

    //do the actual mail sending to the users account
    async prepareForgotPasswordMailMessage(userObject, token, expirationTime, count = 0){

        let settingsDetails = await this.DbActions.selectSingleRow("settings", {
            filteringConditions: [["id", "=", 1]],
        });

        //get the template for the mail
        let emailSubject = 'Password Reset Request';
        let fullName = this.User.returnFullName(userObject)
        let emailTemplate = ForgotPasswordTemplate(
            fullName,
            emailSubject,
            settingsDetails,
            token
        );

        //send a welcome/activation email to the user
        settingsDetails.expiration_time = this.AuthenticationCode.code_expiration_time;
        let mailSetup = MailSetups(
            userObject.email,
            emailSubject,
            emailTemplate,
            settingsDetails
        );

        let mailSender = await mailler(mailSetup);
        count++//increment the count
        if(mailSender.status === false && count < 3){
            this.prepareForgotPasswordMailMessage(userObject, token, expirationTime);
        }
        return mailSender
    }


    //confirm the token supplied by the user give him access to reset password
    async confirmForgotPasswordToken(req, res){
        try {

            let messageType = '', displayMessage = '';
            let message_type = req.body.message_type;
            let forgot_password_email_auth = this.MessageType.returnMessageType('forgot_password_email_auth');
            let forgot_password_auth_app = this.MessageType.returnMessageType('forgot_password_auth_app');

            //validation
            let validationRule = {
                email: "required|email",
                token:"required|numeric",
            };

            if(message_type === forgot_password_email_auth){ validationRule.token_type = "required|string"; }//assign the token_type when its an email auth

            this.valdateFunction(req, validationRule);
            if(this.errorStatus === false){
                this.responseObject.setStatus(false);
                this.responseObject.setMessage(this.errorMessage.errors);
                return res.json(this.responseObject.sendToView());
            }

            //authenticate if the user is logged in
            const email = req.body.email;
            const token = req.body.token;

            //select the user involved
            let userObject = await this.User.selectOneUser([["email", "=", email]]);
            if (userObject === false) {
                throw new Error("Invalid User details supplied");
            }

            if(message_type === forgot_password_email_auth){

                //verify the token provided
                let tokenAuthentication =
                    await this.AuthenticationCode.verifyTokenValidity(
                        token,
                        this.AuthenticationCode.forgot_password_type,
                        userObject,
                        'confirmed'
                    );

                if (tokenAuthentication.status === false) {
                    throw new Error(tokenAuthentication.message);
                }
                messageType = this.MessageType.returnMessageType('password_change_email_option');
                displayMessage = tokenAuthentication.message+', you can now change your password';
            }

            if(message_type === forgot_password_auth_app){
                //password_change_authorisation,password_change_time
                let verifyUser = await this.User.verifyAToken(req, userObject);
                if (verifyUser.status === false) {
                    throw new Error(verifyUser.message);
                }

                //update the user password authorisation to yes
                const now = new Date();
                let currenctDate = date.format(now, "YYYY-MM-DD HH:mm:ss");
                this.User.updateUser({
                    password_change_authorisation:'yes',
                    password_change_time:currenctDate
                });

                messageType = this.MessageType.returnMessageType('password_change_auth_option');
                displayMessage = 'you can now change your password';
            }

            //send response to the view that password is eligible to be changed

            this.responseObject.setMesageType(messageType);
            this.responseObject.setData({ token: token, email: userObject.email });//set the datas to be sent to view
            this.responseObject.setStatus(true);
            this.responseObject.setMessage(displayMessage);
            res.status(200).json(this.responseObject.sendToView());

        }catch(err){
            this.responseObject.setStatus(false);
            this.responseObject.setMessage({
                general_error: [ErrorHandler(err)],
            });
            res.json(this.responseObject.sendToView());
        }
    }



    //change user password
    async changeUserPassword(req, res){

        try{

            let message_type = req.body.message_type;
            let password_change_email_option = this.MessageType.returnMessageType('password_change_email_option');
            let password_change_auth_option = this.MessageType.returnMessageType('password_change_auth_option');

            //validation
            let validationRule = {
                email: "required|email",
                token:"required|numeric",
                password:"required|string|confirmed",
            };

            if(message_type === password_change_email_option){ validationRule.token_type = "required|string"; }//assign the token_type when its an email auth

            this.valdateFunction(req, validationRule);
            if(this.errorStatus === false){
                this.responseObject.setStatus(false);
                this.responseObject.setMessage(this.errorMessage.errors);
                return res.json(this.responseObject.sendToView());
            }

            //authenticate if the user is logged in
            const email = req.body.email;
            const token_type = this.AuthenticationCode.forgot_password_type;
            const token = req.body.token;
            const password = req.body.password;

            //select the user involved
            let userObject = await this.User.selectOneUser([["email", "=", email]]);
            if (userObject === false) {
                throw new Error("Invalid User details supplied");
            }

            let settingsDetails = await this.DbActions.selectSingleRow("settings", {
                filteringConditions: [["id", "=", 1]],
            });

            if(message_type === password_change_email_option){
                //select the token from token table
                let tokenDetails = await this.DbActions.selectSingleRow("code_table", {
                    filteringConditions: [
                        ["user_unique_id", "=", userObject.unique_id],
                        ["token", "=", token],
                        ["type", "=", token_type],
                        ["status", "=", "confirmed"],
                    ],
                });

                if (typeof tokenDetails === "undefined") {
                    throw new Error('Invalid Token supplied');
                }
                //mark token as used
                let tokenUpdate = await this.TokenManager.updateToken({
                    status: 'used',
                    unique_id: tokenDetails.unique_id,
                });
            }

            if(message_type === password_change_auth_option){
                let confirmPasswordChange = this.confirmIfPasswordCanStillBeChanged(userObject);
                if(confirmPasswordChange.status === false){
                    throw new Error(confirmPasswordChange.message);
                }
            }

            //update the user
            let hashedPassword = await this.passwordController.hashPassword(password);
            let updatedUserObject = this.User.updateUser({
                unique_id:userObject.unique_id,
                password:hashedPassword,
                password_change_authorisation:null,
                password_change_time:null
            });

            //send a message to the user prompting password change
            this.sendEmailNotification(userObject, settingsDetails);

            //notify the user via phone sms
            if(userObject.phone_verification !== null){
                this.sendSmsNotification(userObject, settingsDetails);
            }

            //send a response to view
            this.responseObject.setStatus(true);
            this.responseObject.setMessage("Password was successfully changed");
            res.json(this.responseObject.sendToView());

        }catch (e) {
            this.responseObject.setStatus(false);
            this.responseObject.setMessage({
                general_error: [ErrorHandler(e)],
            });
            res.json(this.responseObject.sendToView());
        }

    }

    //check if the password can still be changed for the oauth process
    confirmIfPasswordCanStillBeChanged(userObject){
        //check if the user has prompted for password change and if the time is still within five minutes
        if(userObject.password_change_authorisation !== 'yes'){
            return {
                status: false,
                message: "Password activation failed, please restart process",
            };
        }

        //check if the timescale is less than ten minute
        let currentTime = new Date();

        let TimeOfCreation = userObject.password_change_time;

        let expirationTimeFromCreatedTime = date.addMinutes(TimeOfCreation, this.AuthenticationCode.code_expiration_time);
        currentTime = date.format(currentTime, "YYYY-MM-DD HH:mm:ss");

        expirationTimeFromCreatedTime = date.format(
            expirationTimeFromCreatedTime,
            "YYYY-MM-DD HH:mm:ss"
        );

        //compare the dates
        if (currentTime > expirationTimeFromCreatedTime) {
            return {
                status: false,
                message: "Password activation failed, please restart process",
            };
        }
        return {
            status: true,
            message: "Password can be changed"
        };
    }

    async sendEmailNotification(userObject, settingsDetails){

        //get the template for the mail
        let emailSubject = 'Successful Reset Of Account Password';
        let message = 'You have successfully changed the password for your account with '+settingsDetails.site_name+'. If you did not carry out this action please contact us via support for further actions.';
        let fullName = this.User.returnFullName(userObject)
        let emailTemplate = GenericMailTemplate(
            fullName,
            emailSubject,
            settingsDetails,
            message
        );

        //send a welcome/activation email to the user
        settingsDetails.expiration_time = this.AuthenticationCode.code_expiration_time;
        let mailSetup = MailSetups(
            userObject.email,
            emailSubject,
            emailTemplate,
            settingsDetails
        );

        let mailSender = await mailler(mailSetup);

        if(mailSender.status === false){
            let theClass = this;
            setTimeout(function () {
                theClass.sendEmailNotification(userObject);
            }, 2000);
        }
        return mailSender
    }

    sendSmsNotification(userObject, settingsDetails){
        var accountSid = process.env.TWILIO_ACCOUNT_SID;
        var authToken = process.env.TWILIO_AUTH_TOKEN;

        var client = new twilio(accountSid, authToken);

        client.messages
            .create({
                body:
                    "You have successfully changed your account password for " +
                    settingsDetails.site_name.toUpperCase() +
                    ". Please wait while we review your document. Thanks",
                to: userObject.phone,
                from: process.env.TWILIO_PHONE_NUMBER,
            })
            .then((message) => {return message; });
    }


}

module.exports = ForgotPasswordController;