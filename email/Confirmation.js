import CSS from "./CSS";
import Footer from "./templates/partial/footer";
import Button from "./templates/component/Button";

const confirmation = () => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width"/>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>Simple Transactional Email</title>

        <style>
          {CSS}
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
                            <p>Hi there,</p>
                            <p>Someone signed up with your email to use our service. Please confirm that </p>
                            <Button align="left" url="http://google.com" label="Call To Action"/>
                            <p>This is a really simple email template. Its sole purpose is to get the recipient to click the button with no distractions.</p>
                            <p>Good luck! Hope it works.</p>
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
