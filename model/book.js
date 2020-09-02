const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  book_id: { type: Schema.Types.ObjectId, ref: 'book_id' },
  book_name: String,
  book_press: String,
  status: String,
  create_time: String,
  book_class: String,
  trace: [
    {
      log_id: Schema.Types.ObjectId,
      borrow_time: String,
      return_time: String,
      borrow_user_id: String,
      borrow_user_name: String,
      comment: String,
      score: String
    }
  ]
});

module.exports = schema;
