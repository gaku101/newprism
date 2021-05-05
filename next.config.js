require("dotenv").config();

const {
  DATABASE_URL,
  AUTH0_CLIENTID,
  AUTH0_DOMAIN,
  AUTH0_CLIENT_SECRET,
  AUTH0_SCOPE,
  AUTH0_SECRET,
  BACKEND_ADDRESS,
} = process.env;

module.exports = {
  publicRuntimeConfig: {
    BACKEND_URL: `${BACKEND_ADDRESS}/api/graphql`,
  },
  serverRuntimeConfig: {
    auth: {
      baseURL: BACKEND_ADDRESS,
      issuerBaseURL: `https://${AUTH0_DOMAIN}`,
      secret: AUTH0_SECRET,
      clientID: AUTH0_CLIENTID,
      clientSecret: AUTH0_CLIENT_SECRET,
      routes: {
        callback: "/api/callback",
        postLogoutRedirect: "/",
      },
      authorizationParams: {
        scope: AUTH0_SCOPE,
      },
    },
  },
};
