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

async function put(req,res) {
    const { id } = req.params


    // Esta forma retorna o item que foi feito o update, o outro nao
    const product = await ProductsModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({
        messege: 'Success',
        product
    })
    /* const product = await ProductsModel.findOne( { _id: id } )

    await product.updateOne(req.body)

    res.send({
        message: 'Success att',
        product,
    })
    */
} 

async function remove(req,res) {
    const { id } = req.params
    const messege = 'Success'


    ProductsModel.deleteOne({ _id: id}, function(err) {
        if (err) messege = 'Error'
    })

    res.send({
        messege,
    })
}
module.exports = {
    get,
    post,
    put,
    remove
}