module.exports = {
  redirects: {
    "/": {redirect: false},
    "/auth": {redirect: "/dashboard"},
  },
  unprotected: ["/", "/auth", "/logged-out"],
};
