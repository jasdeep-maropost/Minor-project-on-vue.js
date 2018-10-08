const express = require('express');
const session = require('express-session');
const { ExpressOIDC } = require('@okta/oidc-middleware');
let app = express()
// session support is required to use ExpressOIDC
app.use(session({
  secret: 'this should be secure',
  resave: true,
  saveUninitialized: false
}));

const oidc = new ExpressOIDC({
  issuer: '{issuer}',
  client_id: '{clientid}',
  client_secret: '{client-secret}',
  redirect_uri: 'http://localhost:3000/authorization-code/callback',
  scope: 'openid profile'
});

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
app.use(oidc.router);

app.get('/protected', oidc.ensureAuthenticated(), (req, res) => {
    res.send(JSON.stringify(req.userinfo));
});


app.get('/', (req, res) => {
    if (req.userinfo) {
        res.send(`Hi ${req.userinfo.name}!`);
    } else {
        res.send('Hi!');
}
});
oidc.on('ready', () => {
    app.listen(3000, () => console.log(`Started!`));
});

oidc.on('error', err => {
    console.log('Unable to configure ExpressOIDC', err);
});