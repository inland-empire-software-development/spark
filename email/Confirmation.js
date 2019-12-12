import uikitcss from "./CSS";
import Footer from "./templates/partial/footer";
import Button from "./templates/component/Button";

const confirmation = (props) => {
  const {url = "", user = "there"} = props;
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>Simple Transactional Email</title>

        <style>
          {uikitcss}
        </style>
      </head>
      <body className="">
        <span className="preheader">Email confirmation</span>
        <table role="presentation" border="0" cellPadding="0" cellSpacing="0" className="body">
          <tr>
            <td>&nbsp;</td>
            <td className="container">
              <div className="content">
                <table role="presentation" className="main">
                  <tr>
                    <td className="wrapper">
                      <table role="presentation" border="0" cellPadding="0" cellSpacing="0">
                        <tr>
                          <td>
                            <p>Hello {user},</p>
                            <p>Your email was used to sign up for our service. Please confirm that it was you.</p>
                            <p>After you confirm, you will be able to sign in.</p>
                            <Button align="left" url={url} label="Confirm"/>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>

                <Footer/>
              </div>
            </td>
            <td>&nbsp;</td>
          </tr>
        </table>
      </body>
    </html>
  );
};

export default confirmation();
