module.exports = function override (config,env) {
  // you now have access to the config...
  config.module.loaders[0].query.plugins =  ['styled-components-named'];
  return config;
}
