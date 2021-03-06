const Product = require('../models').Product
const Tag = require('../models').Tag
const License = require('../models').License
const Usage = require('../models').Usage

module.exports = {

  index: (req, res) => {
    Product
      .findAll({
        include: [
          { model: Tag, as: 'tags' },
          { model: License, as: 'licenses' },
          { model: Usage, as: 'usage' }
        ]
      })
      .then(products => {
        return res.status(200).send(products)
      })
      .catch(error => res.status(500).send("Server error"))
  },

  show: (req, res) => {
    Product
      .findById(req.params.id, {
        include: [
          { model: Tag, as: 'tags' },
          { model: License, as: 'licenses' },
          { model: Usage, as: 'usage' }
        ]
      })
      .then(product => {
        if (!product)
          return res.status(404).send({ message: "Product not found" })
        return res.status(200).send(product)
      })
      .catch(error => res.status(500).send("Server error"))
  },

  create: (req, res) => {
    const tagList = req.body.tags || []
    const tagObjects = tagList.map(t => {
      return { name: t }
    })
    Product
      .create({
        name: req.body.name,
        repository: req.body.repository,
        description: req.body.description,
        laborHours: req.body.laborHours,
        tags: tagObjects,
        licenses: req.body.licenses,
        usageKey: req.body.usageKey
      }, {
        include: [
          { model: Tag, as: 'tags' },
          { model: License, as: 'licenses' }
        ]
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(500).send("Server error"))
  },

  update: (req, res) => {
    Product
      .findById(req.params.id, {
        include: [
          { model: Tag, as: 'tags' },
          { model: License, as: 'licenses' },
          { model: Usage, as: 'usage' }
        ]
      })
      .then(product => {
        if (!product)
          return res.status(404).send({ message: "Product not found" })
        product
          .update({
            name: req.body.name || product.name,
            repository: req.body.repository || product.repository,
            description: req.body.description || product.description,
            laborHours: req.body.laborHours || product.laborHours,
            usageKey: req.body.usageKey || product.usageKey
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
