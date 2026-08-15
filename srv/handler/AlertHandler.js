const cds = require('@sap/cds');

async function postEmailAlert(req) {
    try {
        const payload = req.data.payload;
        console.log('Received payload:', JSON.stringify(payload));

        const alertSrv = await cds.connect.to('alert-notification');
        const result = await alertSrv.post('/cf/producer/v1/resource-events', payload);
        return result;
    } catch (error) {
        console.error('Alert Notification call failed:', error.message || error);
        req.error(500, `Failed to send alert: ${error.message || 'Unknown error'}`);
    }
}

module.exports = {
    postEmailAlert
};