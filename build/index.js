module.exports = {
  clientBuild: process.env.NODE_ENV === 'development' ? require('./dev/client.config') : require('./prod/client.config'),
  serverBuild: process.env.NODE_ENV === 'development' ? require('./dev/server.config') : require('./prod/server.config'),
};
