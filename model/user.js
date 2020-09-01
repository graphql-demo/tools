const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'user_id' },
  user_name: String,
  user_email: String,
  account_name: String,
  account_password: String,
  role: String,
  token: String,
  job_post: String,
  status: String,
  time_stamp: String,
  avatar: String,
  department: String,
});

module.exports = schema;
