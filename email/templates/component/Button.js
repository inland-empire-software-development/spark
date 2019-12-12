function Button(props) {
  const {label, url, align} = props;
  return (
    <table role="presentation" border="0" cellPadding="0" cellSpacing="0">
      <tbody>
        <tr>
          <td align={align}>
            <table role="presentation" border="0" cellPadding="0" cellSpacing="0">
              <tbody>
                <tr>
                  <td>
                    <a className="uk-button uk-button-primary" href={url} target="_blank">
                      {label}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Button;
