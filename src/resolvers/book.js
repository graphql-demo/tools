const lodash = require('lodash');
const model = require('../../model');
const { Book } = model;

module.exports = {
  Query: {
    book: async (parent, { input }) => {
      if (lodash.isEmpty(input)) {
        throw new Error("缺少必要参数")
      }
      return await Book.findOne(input).then(data => data)
    },
    books: async (parent, { input }, req) => {
      console.log("req", req)
      return await Book.find(input).then(data => data)
    },
  },
  Mutation: {
    createBook: async (parent, { input }) => {
      const { book_name, book_press } = input;
      const hasDuplicate = await Book.findOne({ book_name, book_press })
      if (hasDuplicate) {
        throw new Error('存在相同书籍！')
      }
      const new_book = new Book(input);
      return await new_book.save();
    },
    deleteBook: async (parent, { book_id }) => {
      return await Book.remove({ book_id }).then(({ deletedCount, ok }) => {
        if (deletedCount !== 0 && ok) {
          return "删除成功"
        } else {
          return "系统异常！"
        }
      });
    },
    updateBook: async (parent, { book_id, input }) => {
      return await Book.update({ book_id }, input).then(({ ok }) => {
        return ok ? '操作成功' : '操作失败'
      })
    },
    updateBookTrace: async (parent, { book_id, input }) => {
      return await Book.update({ book_id }, { $push: { trace: input } }).then(({ deletedCount, ok }) => {
        if (deletedCount !== 0 && ok) {
          return "操作成功"
        } else {
          return "系统异常！"
        }
      });
    }
  },
}