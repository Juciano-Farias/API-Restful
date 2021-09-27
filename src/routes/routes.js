const router = require('express').Router()

const ProductController = require('../controllers/products')

router.get('/products', ProductController.get)
//router.post('/products', ProductController.post)
//router.put('/products/:id', ProductController.put)
//router.delete('/products/:id', ProductController.delete)
module.exports = router