const uikitcss = `
html,
body {
    margin: 0 auto !important;
    padding: 0 !important;
    height: 100% !important;
    width: 100% !important;
    }
* {
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
} 
div[style*="margin: 16px 0"] {
    margin: 0 !important;
} 
#MessageViewBody, #MessageWebViewDiv{
    width: 100% !important;
} 
table,
td {
    mso-table-lspace: 0pt !important;
    mso-table-rspace: 0pt !important;
}
table {
    border-spacing: 0 !important;
    border-collapse: collapse !important;
    table-layout: fixed !important;
    margin: 0 auto !important;
} 
img {
    -ms-interpolation-mode:bicubic;
} 
a {
    text-decoration: none;
} 
a[x-apple-data-detectors],   
.unstyle-auto-detected-links a,
.aBn {
    border-bottom: 0 !important;
    cursor: default !important;
    color: inherit !important;
    text-decoration: none !important;
    font-size: inherit !important;
    font-family: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
} 
.a6S {
    display: none !important;
    opacity: 0.01 !important;
} 
.im {
    color: inherit !important;
} 
img.g-img + div {
    display: none !important;
} 
@media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
    u ~ div .email-container {
        min-width: 320px !important;
    }
} 
@media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
    u ~ div .email-container {
        min-width: 375px !important;
    }
} 
@media only screen and (min-device-width: 414px) {
    u ~ div .email-container {
        min-width: 414px !important;
    }
}
`;

export default uikitcss;
