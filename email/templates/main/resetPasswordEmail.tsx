import React from "react";
import GenericEmailTemplate from "../GenericEmailTemplate";

const ResetPasswordEmail = (options: { url: string; username: string; token: string; email: string; title: string }) => {
  const {url, username, token, email, title} = options;

  if (!url || !username || !email || !token) return (<p>An error has occurred, please contact the administrator</p>);

  return (
    <GenericEmailTemplate title={title} content={
      <table role="presentation" cellSpacing={0} cellPadding={0}>
        <tbody><tr>
          <td style={{padding: '20px', fontFamily: 'sans-serif', fontSize: '15px', lineHeight: '20px', color: '#555555'}}>
            <h1 style={{margin: '0 0 10px 0', fontFamily: 'sans-serif', fontSize: '25px', lineHeight: '30px', color: '#333333', fontWeight: 'normal'}}>{title}</h1>
            <p style={{margin: '10px 0 10px 0'}}>Hello {username},</p>
            <p style={{margin: 0}}>A password reset request was submitted for your account.</p>
            <p style={{margin: 0}}>To keep your account safe, this email has been sent with a link to reset your password.</p>
            <p style={{margin: '10px 0 0 0'}}>If this request was not initiated by you, please contact an administrator.</p>
            <p style={{margin: '10px 0 0 0'}}><a href={`${url}reset-password?user=${username}&email=${email}&token=${token}&action=reset`}>Reset Password</a></p>
          </td>
        </tr>
        </tbody>
      </table>
    }/>
  );
};

export default ResetPasswordEmail;
