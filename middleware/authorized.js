const model = require('../model');

const { User } = model;

const iginore_path = [
  '/',
  '/menu/list',
  '/user/login',
  '/user/register',
  '/mock/server',
  '/service_define'
];

const checkAuthorization = (req, res, next) => {

  const token = req.header('Authorization');
  if (!token) {
    return res.sendError({
      errorCode: '401',
      message: '该服务需要登录后才能访问！'
    });
  }

  User.findOne({ token }, (err, data) => {

    if (!data) {
      return res.sendError({
        errorCode: '401',
        message: '无效的token！'
      });
    }

    /**
     * 核验token的时效性
     * stale fucntion 中 10800000ms代表3hour
     */

    const { time_stamp } = data;
    const stamp = new Date().getTime().toString();
    const stale = (current, newstamp) => newstamp - current >= 10800000;

    if (stale(time_stamp, stamp)) {
      return res.sendError({
        errorCode: '401',
        message: '登录状态已过期，请重新登录'
      });
    }

    res.locals.user = data;
    next();

  })
}

module.exports = (req, res, next) => {
  const api = req.path;
  const pass = iginore_path.includes(api);
  if (!pass) {
    return checkAuthorization(req, res, next);
  }
  next();
}
