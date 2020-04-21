//https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html
const sanitize = (str: string) => {
  if (str) {
    const map: any = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;',
      '`': '&grave;',
    };
    const reg = /[&<>"'/`]/gi;
    return str.replace(reg, (match) => map[match]);
  }
  return null;
};

const desanitize = (str: string) => {
  if (str) {
    const map: any = {
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#x27;': "'",
      '&#x2F;': '/',
      '&grave;': '`',
    };
    const reg = /&amp;/gi;
    return str.replace(reg, (match) => map[match]);
  }
  return null;
};

export { sanitize, desanitize };
