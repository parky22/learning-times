module.exports = function (api) {
  api.cache(true);
  
  const presets = ["@babel/preset-env", "@babel/preset-react"];
  const plugins = ["@babel/plugin-proposal-export-default-from", "@babel/plugin-transform-arrow-functions"];

  return {
    presets,
    plugins,
  };
}