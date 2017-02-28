/**
 * Created by taras on 06.02.16.
 */
var configuration = require('nconf');

configuration.argv()
    .env()
    .file({ file: './backend/config.json' });

module.exports = configuration;