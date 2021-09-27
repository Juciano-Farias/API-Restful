const ProductsModel = require('../models/products')

async function get(req, res) {
    const { id } = req.params

    const obj = id ? { _id: id } : null

    const products = await ProductsModel.find(obj)

    
    res.send(products)
}

function post(req,res) {
    const {
        name,
        brand,
        price
    } = req.body

    const products = new ProductsModel({
        name,
        brand,
        price
    })

    products.save()

    res.send({
        message: 'Success'
    })
}

module.exports = {
    get,
    post,
}