const express = require('express')
const router = express.Router()
const {getUsers,
        setDetail,
} = require('../controller/users')



router.route('/').get(getUsers).post(setDetail)


module.exports = router