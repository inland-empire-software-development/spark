import React from "react";
import GenericEmailTemplate from "../GenericEmailTemplate";


const ConfirmationEmail = (options: { url: string; username: string; token: string; title: string }) => {
  const {url, username, token, title} = options;

  if (!url || !username || !token) return (<p>An error has occurred, please contact the administrator</p>);

  return (
    <GenericEmailTemplate title={title} content={
      <table role="presentation" cellSpacing={0} cellPadding={0}>
        <tbody><tr>
          <td style={{padding: '20px', fontFamily: 'sans-serif', fontSize: '15px', lineHeight: '20px', color: '#555555'}}>
            <h1 style={{margin: '0 0 10px 0', fontFamily: 'sans-serif', fontSize: '25px', lineHeight: '30px', color: '#333333', fontWeight: 'normal'}}>{title}</h1>
            <p style={{margin: '10px 0 10px 0'}}>Hello {username},</p>
            <p style={{margin: 0}}>This email was used to sign up for our service.</p>
            <p style={{margin: 0}}>Please confirm that it was you.</p>
            <p style={{margin: '10px 0 0 0'}}>After you confirm, you will be able to sign in to your account.</p>
            <p style={{margin: '10px 0 0 0'}}><a href={`${url}confirmation?user=${username}&token=${token}`}>Confirm</a></p>
          </td>
        </tr>
        </tbody>
      </table>
    } />
  );
};

export default ConfirmationEmail;
