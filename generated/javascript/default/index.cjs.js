const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'second_mind',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

