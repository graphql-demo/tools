import merge from 'lodash/merge'

import user from './user.js'

const PureObj = Object.create(null)

export default merge(PureObj, user)