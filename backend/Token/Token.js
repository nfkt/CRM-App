const token_key =  require('crypto').randomBytes(64).toString('hex');

module.exports = token_key;