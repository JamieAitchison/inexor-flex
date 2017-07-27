const TreeClient = require('@inexor-game/treeclient').TreeClient;
const log = require('@inexor-game/logger')();

exports.command = 'save';
exports.describe = 'Save release config';

exports.handler = function(argv) {
    log.info('Saving release config from the command-line')
    let client = new TreeClient(argv.profileHostname, argv.profilePort);
    client.releases.save((data, response) => {
        if (response.statusCode == 200) {
            log.info(JSON.stringify(data));
        }
    })
}
