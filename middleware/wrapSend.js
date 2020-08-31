module.exports = (req, res, next) => {
  res.sendData = function (data) {
    res.send({
      status: 1,
      content: data,
    });
  };
  res.sendError = function ({ errorCode, message }) {
    res.send({
      status: 0,
      content: null,
      errorCode,
      message
    });
  };
  res.sendSucc = function () {
    res.send({
      status: 1,
      content: '操作成功',
    });
  };
  res.sendFail = function () {
    res.send({
      status: 0,
      content: '操作失败，请联系管理员！',
    });
  };
  next();
}
