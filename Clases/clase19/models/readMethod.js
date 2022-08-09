const db = require('./db')
const userModel = require('../models/user')

const ITEMS_BY_PAGE = 3

const getPageParams = (pageNumber = 1) => {
 return {
   limit: ITEMS_BY_PAGE,
   skip: (pageNumber - 1) * ITEMS_BY_PAGE
 }
}
