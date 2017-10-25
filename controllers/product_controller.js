const Product = require('../models').Product

module.exports = {

  index: (req, res) => {
    Product
      .findAll()
      .then(products => {
        return res.status(200).send(products)
      })
      .catch(error => res.status(500).send("Server error"))
  },

  show: (req, res) => {
    Product
      .findById(req.params.id)
      .then(product => {
        if (!product)
          return res.status(404).send({ message: "Product not found" })
        return res.status(200).send(product)
      })
      .catch(error => res.status(500).send("Server error"))
  },

  create: (req, res) => {
    Product
      .create({
        name: req.body.name,
        repository: req.body.repository,
        description: req.body.description,
        laborHours: req.body.laborHours
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(500).send("Server error"))
  },

  update: (req, res) => {
    Product
      .findById(req.params.id)
      .then(product => {
        if (!product)
          return res.status(404).send({ message: "Product not found" })
        product
          .update({
            name: req.body.name || product.name,
            repository: req.body.repository || product.repository,
            description: req.body.description || product.description,
            laborHours: req.body.laborHours || product.laborHours
          })
          .then(() => res.status(200).send(product))
          .catch(error => res.status(500).send("Server error"))
      })
      .catch(error => res.status(500).send("Server error"))
  },

  destroy: (req, res) => {
    Product
      .findById(req.params.id)
      .then(product => {
        if (!product)
          return res.status(404).send({ message: "Product not found" })
        product
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(500).send("Server error"))
      })
      .catch(error => res.status(500).send("Server error"))
  }

}
