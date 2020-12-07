const express = require('express')
const router = express.Router()

const adminController = require('../controllers/api/adminController.js')
const categoryController = require('../controllers/api/categoryController.js')

const { authenticated, authenticatedAdmin, isOwnProfile, editOwnProfile } = require('../middleware/check-auth')

const passport = require('../config/passport')

router.get('/admin/restaurants', authenticatedAdmin, adminController.getRestaurants)
router.get('/admin/restaurants/:id', authenticatedAdmin, adminController.getRestaurant)
router.get('/admin/categories', authenticatedAdmin, categoryController.getCategories)

module.exports = router