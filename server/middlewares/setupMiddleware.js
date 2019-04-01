module.exports = (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    const addProdMiddlewares = require('./prodMiddleware');
    addProdMiddlewares(app, options);
  } else {
    const webpackConfig = require('../../webpack/webpack.dev.babel');
    const addDevMiddlewares = require('./devMiddleware');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
