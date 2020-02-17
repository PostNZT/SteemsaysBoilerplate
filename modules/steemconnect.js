let steemconnect2 = require('sc2-sdk');
let config = require('../config')

let steem = steemconnect2.Initialize({
    app: config.auth.client_id,
    callbackURL: config.auth.redirect_uri ,
    scope: ['login','vote','comment',"posting"]
});

module.exports = steem;

//access token ang steem from the sc2-sdk
// comment is a scope that is explained in https://developers.steem.io/apidefinitions/#broadcast_ops_comment