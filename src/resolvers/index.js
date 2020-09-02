import merge from 'lodash/merge'

import user from './user.js'
import book from './book.js'

const PureObj = Object.create(null)

const resolvers = merge(PureObj, user, book)
export default resolvers