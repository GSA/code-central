const Product = require('../models/product')

module.exports = {

  index: (req, res) => {
    Product.fetchAll()
    .then((products) => {
      res.json({ products })
    })
  },

  show: (req, res) => {
    Product.where('id', req.params.id)
    .fetch()
    .then((product) => {
      res.json({ product })
    })
  },

  create: (req, res) => {
    new Product({
      name: req.body.name,
      repository: req.body.repository,
      description: req.body.description,
      laborHours: req.body.laborHours
    })
    .save()
    .then((created_product) => {
      res.json({ created_product })
    })
  },

  update: (req, res) => {
    Product.where('id', req.params.id)
    .fetch()
    .then((product) => {
      product.save({
        name: req.body.name,
        repository: req.body.repository,
        description: req.body.description,
        laborHours: req.body.laborHours
      }).then((updated_product) => {
        res.json({ updated_product })
      })
    })
  },

  destroy: (req, res) => {
    Product.where('id', req.params.id)
    .destroy()
    .then((deleted_product) => {
      res.json({ deleted_product })
    })
  }

}
