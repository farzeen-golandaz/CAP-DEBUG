const AlertHandler = require('./handler/AlertHandler');
//const STPPrcOrchJobHandler = require('./handler/STPPrcOrchJobHandler');

module.exports = async function (srv) {
    srv.on(["postAlert"], AlertHandler.postEmailAlert)
}