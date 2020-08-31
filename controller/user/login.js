const model = require('../../model');
const createToken = require('../../utlis/createToken');

const { User } = model;

const controller = async (req, res) => {
  const { username, password } = req.body;
  const time_stamp = new Date().getTime().toString();

  const token = createToken();

  User.findOne({ username, password })
    .exec((err, data) => {
      if (!data) {
        res.sendError({
          errorCode: '101',
          message: '用户名或密码错误',
        });
        return false;
      } else {
        User.update({ username, password }, { time_stamp, token })
          .exec((err, data) => {
            if (!err) {
              res.sendData({ token });
            } else {
              res.sendError({
                errorCode: '101',
                message: '系统异常',
              })
            }
          });
      }
    })


}

module.exports = {
  api: 'login',
  method: 'post',
  controller,
};
