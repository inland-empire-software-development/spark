import React from "react";
import mailCSS from "../CSS";
import Footer from "../partials/Footer";

function GenericEmailTemplate(props: {content: JSX.Element; title: string}) {
  const {content, title} = props;
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="x-apple-disable-message-reformatting"/>
        <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no"/>
        <title>Password Reset</title>
        <style>
          {mailCSS}
        </style>
      </head>
      <body style={{margin: 0, padding: '0 !important', backgroundColor: '#ffffff'}}>
        <div style={{width: '100%', backgroundColor: '#ffffff'}}>
          <div style={{display: 'none', fontSize: '1px', lineHeight: '1px', maxHeight: '0px', maxWidth: '0px', opacity: 0, overflow: 'hidden', fontFamily: 'sans-serif'}}>
            {title}
          </div>
          <div style={{display: 'none', fontSize: '1px', lineHeight: '1px', maxHeight: '0px', maxWidth: '0px', opacity: 0, overflow: 'hidden', fontFamily: 'sans-serif'}}>
          ‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;‌&nbsp;
          </div>
          <div style={{maxWidth: '600px', margin: '0 auto'}} className="email-container">
            <table cellSpacing={0} cellPadding={0} style={{margin: 'auto'}}>
              <tbody><tr>
                <td style={{backgroundColor: '#ffffff'}}>
                  {content}
                </td>
              </tr>
              <tr>
                <td aria-hidden="true" style={{fontSize: '0px', lineHeight: '0px'}}>
                  &nbsp;
                </td>
              </tr>
              </tbody></table>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}


export default GenericEmailTemplate;
