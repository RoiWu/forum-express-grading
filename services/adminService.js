const db = require('../models')
const Restaurant = db.Restaurant
const Category = db.Category
const User = db.User

const adminController = {
  /////////
  // Restaurant
  /////////
  getRestaurants: (req, res, callback) => {
    return Restaurant.findAll({
      raw: true,
      nest: true,
      include: [Category]
    }).then(restaurants => {
      callback({ restaurants: restaurants })
    })
  }
}

module.exports = adminController
