const express = require('express');
const user = require('./controller/user');

const routers = {
  user,
};


module.exports = (app) => {
  for (let router in routers) {
    const Router = express.Router();
    (routers[router] || []).forEach(({ api, method, controller }) => {
      Router[method](`/${api}`, controller);
    });
    app.use(`/${router}`, Router);
  }
}
