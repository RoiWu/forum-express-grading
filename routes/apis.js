const express = require('express')
const router = express.Router()

const adminController = require('../controllers/api/adminController.js')

const { authenticated, authenticatedAdmin, isOwnProfile, editOwnProfile } = require('../middleware/check-auth')

const passport = require('../config/passport')

router.get('/admin/restaurants', authenticatedAdmin, adminController.getRestaurants)

module.exports = router