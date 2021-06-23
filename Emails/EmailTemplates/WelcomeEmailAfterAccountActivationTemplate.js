const WelcomeMailAfterAccountActivationTemplate = (
  logoLink = "https://techocraft.com/img/logo.png",
  companyName = "",
  fullName,
  companyAddress,
  site_url
) => {
  return `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="format-detection" content="telephone=no">
    <meta name="x-apple-disable-message-reformatting">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style type="text/css">
    @media screen {
        @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 400;
            src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvl4jLazX3dA.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 400;
            src: local('Fira Sans Regular'), local('FiraSans-Regular'), url(https://fonts.gstatic.com/s/firasans/v8/va9E4kDNxMZdWfMOD5Vvk4jLazX3dGTP.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }

        @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 500;
            src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnZKveRhf6Xl7Glw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 500;
            src: local('Fira Sans Medium'), local('FiraSans-Medium'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnZKveQhf6Xl7Gl3LX.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }

        @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 700;
            src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnLK3eRhf6Xl7Glw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 700;
            src: local('Fira Sans Bold'), local('FiraSans-Bold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnLK3eQhf6Xl7Gl3LX.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }

        @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 800;
            src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnMK7eRhf6Xl7Glw.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }

        @font-face {
            font-family: 'Fira Sans';
            font-style: normal;
            font-weight: 800;
            src: local('Fira Sans ExtraBold'), local('FiraSans-ExtraBold'), url(https://fonts.gstatic.com/s/firasans/v8/va9B4kDNxMZdWfMOD5VnMK7eQhf6Xl7Gl3LX.woff2) format('woff2');
            unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
    }

    #outlook a {
        padding: 0;
    }

    .ExternalClass,
    .ReadMsgBody {
        width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass td,
    .ExternalClass div,
    .ExternalClass span,
    .ExternalClass font {
        line-height: 100%;
    }

    div[style*="margin: 14px 0;"],
    div[style*="margin: 16px 0;"] {
        margin: 0 !important;
    }

    @media only screen and (min-width:621px) {
        .pc-container {
            width: 620px !important;
        }
    }

    @media only screen and (max-width:620px) {

        .pc-footer-box-s2,
        .pc-footer-box-s4,
        .pc-header-box-s3 .pc-header-box-in {
            padding-left: 30px !important;
            padding-right: 30px !important
        }

        .pc-spacing.pc-m-header-4 td {
            font-size: 53px !important;
            height: 53px !important;
            line-height: 53px !important
        }

        .pc-features-box-s4 {
            padding: 35px 10px 30px !important
        }

        .pc-features-row-s1 .pc-features-row-col {
            max-width: 50% !important
        }

        .pc-content-box-s2 {
            padding: 35px 10px 15px !important
        }

        .pc-cta-box-s14 .pc-cta-box-in {
            padding-bottom: 35px !important;
            padding-top: 35px !important
        }

        .pc-footer-row-s2 .pc-footer-row-col {
            width: 100% !important
        }

        .pc-mobile-text-centered {
            text-align: center !important
        }

        .pc-spacing.pc-m-footer-h-59 td {
            font-size: 20px !important;
            height: 20px !important;
            line-height: 20px !important
        }
    }

    @media only screen and (max-width:525px) {
        .pc-header-box-s3 .pc-header-box-in {
            padding: 25px 20px 20px !important
        }

        .pc-spacing.pc-m-header-4 td {
            font-size: 43px !important;
            height: 43px !important;
            line-height: 43px !important
        }

        .pc-header-cta-s2 .pc-header-cta-title {
            font-size: 30px !important;
            line-height: 1.42 !important
        }

        .pc-cta-text br,
        .pc-cta-title br,
        .pc-footer-text-s2 br,
        .pc-header-cta-text br,
        .pc-header-cta-title br {
            display: none !important
        }

        .pc-features-box-s4 {
            padding: 25px 0 20px !important
        }

        .pc-features-row-s1 .pc-features-row-col {
            max-width: 100% !important
        }

        .pc-content-box-s2 {
            padding: 25px 0 5px !important
        }

        .pc-cta-box-s14 .pc-cta-box-in,
        .pc-footer-box-s2 {
            padding: 25px 20px !important
        }

        .pc-cta-s1 .pc-cta-title {
            font-size: 24px !important;
            line-height: 1.42 !important
        }

        .pc-footer-box-s4 {
            padding: 15px 20px 25px !important
        }

        .pc-cta-icon.pc-m-module-18 {
            height: auto !important;
            width: 72px !important
        }

        .pc-footer-socials-s2 {
            font-size: 14px !important
        }
    }
    </style>
    <!--[if mso]>
  <style type="text/css">
    .pc-fb-font{font-family:Helvetica,Arial,sans-serif !important;}
  </style>
  <![endif]-->
    <!--[if gte mso 9]>
  <xml>
    <o:OfficeDocumentSettings>
      <o:AllowPNG/>
      <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
  </xml>
  <![endif]-->
</head>

<body class="pc-fb-font" bgcolor="#f4f4f4"
    style="background-color: #f4f4f4; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 16px; width: 100% !important; Margin: 0 !important; padding: 0; line-height: 1.5; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%">
    <table style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%" border="0" cellpadding="0"
        cellspacing="0">
        <tbody>
            <tr>
                <td style="padding: 0; vertical-align: top;" align="center" valign="top">
                    <!--[if (gte mso 9)|(IE)]>
      <table width="620" align="center" border="0" cellspacing="0" cellpadding="0"><tr><td width="620" align="center" valign="top">
      <![endif]-->
                    <table class="pc-container" align="center"
                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; Margin: 0 auto; max-width: 620px;"
                        width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td align="left" style="vertical-align: top; padding: 0 10px;" valign="top"> <span
                                        class="preheader"
                                        style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Template
                                        created by Designmodo.com</span>
                                    <table border="0" cellpadding="0" cellspacing="0"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td style="vertical-align: top; padding: 0; height: 20px; font-size: 20px; line-height: 20px;"
                                                    valign="top">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1)"
                                        border="0" cellspacing="0" cellpadding="0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <!-- START MODULE: Header 4 -->
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                        width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td class="pc-header-box-s3"
                                                                    style="vertical-align: top; background-color: #ffffff"
                                                                    valign="top" bgcolor="#ffffff">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                        width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="pc-header-box-in"
                                                                                    style="vertical-align: top; padding: 34px 40px 55px;"
                                                                                    valign="top">
                                                                                    <table border="0" cellpadding="0"
                                                                                        cellspacing="0"
                                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                                        width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center"
                                                                                                    style="vertical-align: top;"
                                                                                                    valign="top">
                                                                                                    <table border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 130px;"
                                                                                                        width="130">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td style="vertical-align: top;"
                                                                                                                    valign="top">
                                                                                                                    <a href="${logoLink}"
                                                                                                                        style="text-decoration: none;">
                                                                                                                        <img src="${site_url}/images/logo-dark.png"
                                                                                                                            width="130"
                                                                                                                            height="22"
                                                                                                                            alt=""
                                                                                                                            style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; display: block; Margin: 0 auto; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 20px; font-weight: 700; color: #1B1B1B;">
                                                                                                                    </a>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td style="vertical-align: top;"
                                                                                                    valign="top">
                                                                                                    <table
                                                                                                        class="pc-spacing pc-m-header-4"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                                                        width="100%">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td style="vertical-align: top; height: 61px; line-height: 61px; font-size: 61px;"
                                                                                                                    valign="top">
                                                                                                                    &nbsp;
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td style="vertical-align: top;"
                                                                                                    valign="top">
                                                                                                    <table
                                                                                                        class="pc-header-cta-s2"
                                                                                                        border="0"
                                                                                                        cellpadding="0"
                                                                                                        cellspacing="0"
                                                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                                                        width="100%">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td style="vertical-align: top; text-align: center; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-weight: 500; font-size: 14px; color: #40BE65;"
                                                                                                                    valign="top"
                                                                                                                    align="center">
                                                                                                                    Hi
                                                                                                                    ${fullName},
                                                                                                                    Welcome
                                                                                                                    To
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td class="pc-header-cta-title pc-fb-font"
                                                                                                                    style="vertical-align: top; padding: 12px 0 0; text-align: center; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 1.28; letter-spacing: -0.6px; color: #1B1B1B;"
                                                                                                                    valign="top"
                                                                                                                    align="center">
                                                                                                                    ${companyName}
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                            <tr>

                                                                                                                <td style="vertical-align: top; padding: 30px 0 0 0; text-align: center;"
                                                                                                                    valign="top"
                                                                                                                    align="center">
                                                                                                                    <img src="https://techocraft.com/img/techocraft-mobile-app-development.gif"
                                                                                                                        width="346"
                                                                                                                        height="277"
                                                                                                                        alt=""
                                                                                                                        style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; display: block; Margin: 0 auto; max-width: 100%; height: auto; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; color: #1B1B1B;">
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td class="pc-header-cta-text pc-fb-font"
                                                                                                                    style="vertical-align: top; padding: 30px 0 0 0; text-align: center; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 300; line-height: 1.56; letter-spacing: -0.2px; color: #9B9B9B;"
                                                                                                                    valign="top"
                                                                                                                    align="center">
                                                                                                                    Lorem
                                                                                                                    Ipsum
                                                                                                                    is
                                                                                                                    simply
                                                                                                                    dummy
                                                                                                                    text
                                                                                                                    of
                                                                                                                    the
                                                                                                                    printing
                                                                                                                    and
                                                                                                                    typesetting
                                                                                                                    industry.
                                                                                                                    Lorem
                                                                                                                    Ipsum
                                                                                                                    has
                                                                                                                    been
                                                                                                                    the
                                                                                                                    industry's
                                                                                                                    standard
                                                                                                                    dummy
                                                                                                                    text
                                                                                                                    ever
                                                                                                                    since
                                                                                                                    the
                                                                                                                    1500s,
                                                                                                                    when
                                                                                                                    an
                                                                                                                    unknown
                                                                                                                    printer
                                                                                                                    took
                                                                                                                    a
                                                                                                                    galley
                                                                                                                    of
                                                                                                                    type
                                                                                                                    and
                                                                                                                    scrambled
                                                                                                                    it
                                                                                                                    to
                                                                                                                    make
                                                                                                                    a
                                                                                                                    type
                                                                                                                    specimen
                                                                                                                    book.
                                                                                                                    It
                                                                                                                    has
                                                                                                                    survived
                                                                                                                    not
                                                                                                                    only
                                                                                                                    five
                                                                                                                    centuries,
                                                                                                                    but
                                                                                                                    also
                                                                                                                    the
                                                                                                                    leap
                                                                                                                    into
                                                                                                                    electronic
                                                                                                                    typesetting,
                                                                                                                    remaining
                                                                                                                    essentially
                                                                                                                    unchanged.
                                                                                                                    It
                                                                                                                    was
                                                                                                                    popularised
                                                                                                                    in
                                                                                                                    the
                                                                                                                    1960s
                                                                                                                    with
                                                                                                                    the
                                                                                                                    release
                                                                                                                    of
                                                                                                                    Letraset
                                                                                                                    sheets
                                                                                                                    containing
                                                                                                                    Lorem
                                                                                                                    Ipsum
                                                                                                                    passages,
                                                                                                                    and
                                                                                                                    more
                                                                                                                    recently
                                                                                                                    with
                                                                                                                    desktop
                                                                                                                    publishing
                                                                                                                    software
                                                                                                                    like
                                                                                                                    Aldus
                                                                                                                    PageMaker
                                                                                                                    including
                                                                                                                    versions
                                                                                                                    of
                                                                                                                    Lorem
                                                                                                                    Ipsum
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                            <tr>
                                                                                                                <td style="vertical-align: top;"
                                                                                                                    valign="top">
                                                                                                                    <table
                                                                                                                        border="0"
                                                                                                                        cellpadding="0"
                                                                                                                        cellspacing="0"
                                                                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                                                                        width="100%">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td style="vertical-align: top; height: 24px; line-height: 24px; font-size: 24px;"
                                                                                                                                    valign="top">
                                                                                                                                    &nbsp;
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>

                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <!-- END MODULE: Header 4 -->
                                                    <!-- START MODULE: Feature 5 -->
                                                    <!-- <table border="0" cellpadding="0" cellspacing="0"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                        width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td class="pc-features-box-s4"
                                                                    style="vertical-align: top; padding: 40px 20px 35px; background-color: #ffffff"
                                                                    valign="top" bgcolor="#ffffff">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                        width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="pc-fb-font"
                                                                                    style="vertical-align: top; text-align: center; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 24px; font-weight: 700; line-height: 1.42; letter-spacing: -0.4px; color: #151515; padding: 0 20px;"
                                                                                    valign="top" align="center">
                                                                                    We are pleased to have you.</td>
                                                                            </tr>




                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table> -->
                                                    <!-- END MODULE: Feature 5 -->


                                                    <!-- START MODULE: Call to action 19 -->
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                        width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td class="pc-cta-box-s14"
                                                                    style="vertical-align: top; background-color: #ffffff"
                                                                    valign="top" bgcolor="#ffffff">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                        width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="pc-cta-box-in"
                                                                                    style="vertical-align: top; padding: 10px 10px 32px;"
                                                                                    valign="top">
                                                                                    <table class="pc-cta-s1" border="0"
                                                                                        cellpadding="0" cellspacing="0"
                                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                                        width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td style="vertical-align: top; text-align: center;"
                                                                                                    valign="top"
                                                                                                    align="center"> <img
                                                                                                        src="${site_url}/images/icon-postcards-square-blue.png"
                                                                                                        width="72"
                                                                                                        height="72"
                                                                                                        alt=""
                                                                                                        style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; display: block; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; color: #151515; Margin: 0 auto;">
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td style="vertical-align: top; height: 14px; font-size: 14px; line-height: 14px;"
                                                                                                    valign="top">&nbsp;
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="pc-cta-title pc-fb-font"
                                                                                                    style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; color: #151515; font-size: 24px; font-weight: 700; line-height: 1.42; letter-spacing: -0.4px; text-align: center;"
                                                                                                    valign="top"
                                                                                                    align="center">App
                                                                                                    is available for iOS
                                                                                                    and Android.</td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td style="vertical-align: top; height: 10px; font-size: 10px; line-height: 10px;"
                                                                                                    valign="top">&nbsp;
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td class="pc-cta-text pc-fb-font"
                                                                                                    style="vertical-align: top; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 300; line-height: 1.56; color: #9B9B9B; text-align: center;"
                                                                                                    valign="top"
                                                                                                    align="center">
                                                                                                    Co-ordinate
                                                                                                    campaigns and
                                                                                                    product launches,
                                                                                                    <br>with improved
                                                                                                    overall
                                                                                                    communication.
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td style="vertical-align: top; height: 2px; font-size: 2px; line-height: 2px;"
                                                                                                    valign="top">&nbsp;
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td style="vertical-align: top; font-size: 0; text-align: center; padding: 9px 0 0"
                                                                                                    align="center"
                                                                                                    valign="top">
                                                                                                    <!--[if (gte mso 9)|(IE)]>
                                                <table border="0" cellspacing="0" cellpadding="0" align="center">
                                                    <tr>
                                                        <td valign="top">
                                                <![endif]-->
                                                                                                    <div
                                                                                                        style="display: inline-block; vertical-align: top">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                                                            width="100%">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="vertical-align: top; padding: 8px; text-align: center;"
                                                                                                                        valign="top"
                                                                                                                        align="center">
                                                                                                                        <a href="http://example.com"
                                                                                                                            style="text-decoration: none;">
                                                                                                                            <img src="${site_url}/images/button-app-store-dark.png"
                                                                                                                                width="127"
                                                                                                                                height="52"
                                                                                                                                alt=""
                                                                                                                                style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; height: auto; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; color: #ffffff; max-width: 100%; display: block;">
                                                                                                                        </a>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                    <!--[if (gte mso 9)|(IE)]>
                                                </td>
                                                <td valign="top">
                                                <![endif]-->
                                                                                                    <div
                                                                                                        style="display: inline-block; vertical-align: top">
                                                                                                        <table
                                                                                                            border="0"
                                                                                                            cellpadding="0"
                                                                                                            cellspacing="0"
                                                                                                            style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                                                            width="100%">
                                                                                                            <tbody>
                                                                                                                <tr>
                                                                                                                    <td style="vertical-align: top; padding: 8px; text-align: center;"
                                                                                                                        valign="top"
                                                                                                                        align="center">
                                                                                                                        <a href="http://example.com"
                                                                                                                            style="text-decoration: none;">
                                                                                                                            <img src="${site_url}/images/button-google-play-dark.png"
                                                                                                                                width="136"
                                                                                                                                height="52"
                                                                                                                                alt=""
                                                                                                                                style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; height: auto; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; color: #ffffff; max-width: 100%; display: block;">
                                                                                                                        </a>
                                                                                                                    </td>
                                                                                                                </tr>
                                                                                                            </tbody>
                                                                                                        </table>
                                                                                                    </div>
                                                                                                    <!--[if (gte mso 9)|(IE)]>
                                                </td>
                                                </tr>
                                                </table>
                                                <![endif]-->
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <!-- END MODULE: Call to action 19 -->
                                                    <!-- START MODULE: Footer 3 -->
                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                        width="100%">
                                                        <tbody>
                                                            <tr>
                                                                <td class="pc-footer-box-s4"
                                                                    style="vertical-align: top; padding: 31px 40px; background-color: #ffffff"
                                                                    valign="top" bgcolor="#ffffff">
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                        width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="pc-footer-row-s2"
                                                                                    style="vertical-align: top;"
                                                                                    valign="top">
                                                                                    <!--[if (gte mso 9)|(IE)]>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td width="260" style="width:260px;" valign="top">
                        <![endif]-->
                                                                                    <table class="pc-footer-row-col"
                                                                                        border="0" cellpadding="0"
                                                                                        cellspacing="0" align="left"
                                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="pc-footer-text-s2 pc-mobile-text-centered pc-fb-font"
                                                                                                    style="vertical-align: top; line-height: 1.43; letter-spacing: -0.2px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; color: #9B9B9B; padding: 10px 0;"
                                                                                                    valign="top">
                                                                                                    ${companyAddress}
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <!--[if (gte mso 9)|(IE)]>
                        </td>
                        <td width="260" style="width:260px;" align="right" valign="top">
                        <![endif]-->
                                                                                    <table class="pc-footer-row-col"
                                                                                        border="0" cellpadding="0"
                                                                                        cellspacing="0" align="right"
                                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="pc-mobile-text-centered"
                                                                                                    style="vertical-align: top; line-height: 1.3; font-size: 20px; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; padding: 4px 0 10px; text-align: left;"
                                                                                                    valign="top"
                                                                                                    align="left"> <a
                                                                                                        href="http://example.com"
                                                                                                        style="text-decoration: none;">
                                                                                                        <img src="${site_url}/images/facebook-dark.png"
                                                                                                            width="15"
                                                                                                            height="15"
                                                                                                            alt=""
                                                                                                            style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #151515;">
                                                                                                    </a>
                                                                                                    <span>&nbsp;&nbsp;</span>
                                                                                                    <a href="http://example.com"
                                                                                                        style="text-decoration: none;">
                                                                                                        <img src="${site_url}/images/twitter-dark.png"
                                                                                                            width="16"
                                                                                                            height="14"
                                                                                                            alt=""
                                                                                                            style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #151515;">
                                                                                                    </a>
                                                                                                    <span>&nbsp;&nbsp;</span>
                                                                                                    <a href="http://example.com"
                                                                                                        style="text-decoration: none;">
                                                                                                        <img src="${site_url}/images/google-plus-dark.png"
                                                                                                            width="22"
                                                                                                            height="15"
                                                                                                            alt=""
                                                                                                            style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #151515;">
                                                                                                    </a>
                                                                                                    <span>&nbsp;&nbsp;</span>
                                                                                                    <a href="http://example.com"
                                                                                                        style="text-decoration: none;">
                                                                                                        <img src="${site_url}/images/instagram-dark.png"
                                                                                                            width="16"
                                                                                                            height="15"
                                                                                                            alt=""
                                                                                                            style="border: 0; line-height: 100%; outline: 0; -ms-interpolation-mode: bicubic; font-size: 14px; color: #151515;">
                                                                                                    </a>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <!--[if (gte mso 9)|(IE)]>
                        </td></tr></table>
                        <![endif]-->
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <table class="pc-spacing pc-m-footer-h-59"
                                                                        border="0" cellpadding="0" cellspacing="0"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                        width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td style="vertical-align: top; height: 59px; line-height: 59px; font-size: 59px;"
                                                                                    valign="top">&nbsp;</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                    <table border="0" cellpadding="0" cellspacing="0"
                                                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                                                                        width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="pc-fb-font"
                                                                                    style="vertical-align: top; text-align: center; line-height: 1.43; font-family: 'Fira Sans', Helvetica, Arial, sans-serif; font-size: 14px; color: #9B9B9B;"
                                                                                    valign="top" align="center">
                                                                                    <span>&nbsp;&nbsp;</span>
                                                                                    <a href="http://example.com"
                                                                                        style="text-decoration: none; color: #1595E7;">Company
                                                                                        Url</a>&nbsp;&nbsp;|&nbsp;&nbsp;
                                                                                    <a href="http://example.com"
                                                                                        style="text-decoration: none; color: #1595E7;">Unsubscribe</a>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <!-- END MODULE: Footer 3 -->
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table border="0" cellpadding="0" cellspacing="0"
                                        style="mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;" width="100%">
                                        <tbody>
                                            <tr>
                                                <td style="vertical-align: top; padding: 0; height: 20px; font-size: 20px; line-height: 20px;"
                                                    valign="top">&nbsp;</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!--[if (gte mso 9)|(IE)]>
      </td></tr></table>
      <![endif]-->
                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>`;
};
module.exports = WelcomeMailAfterAccountActivationTemplate;
