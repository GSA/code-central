const Tag = require('../models').Tag

module.exports = {

  index: (req, res) => {
    Tag
      .findAll({ where: { productId: req.params.productId } })
      .then(tags => {
        return res.status(200).send(tags)
      })
      .catch(error => res.status(500).send("Server error"))
  },

  show: (req, res) => {
    Tag
      .findById(req.params.id)
      .then(tag => {
        if (!tag)
          return res.status(404).send({ message: "Tag not found" })
        return res.status(200).send(tag)
      })
      .catch(error => res.status(500).send("Server error"))
  },

  create: (req, res) => {
    Tag
      .create({
        name: req.body.name,
        productId: req.params.productId
      })
      .then(tag => res.status(201).send(tag))
      .catch(error => res.status(500).send("Server error"))
  },

  replace: (req, res) => {
    Tag
      .destroy({ where: { productId: req.params.productId } })
      .then(() => {
        const tagList = req.body.tags || []
        const tagObjects = tagList.map(tagName => {
          return {
            productId: req.params.productId,
            name: tagName
          }
        })
        Tag
          .bulkCreate(tagObjects)
          .then(() => Tag.findAll({ where: { productId: req.params.productId } }))
          .then((tags) => res.status(200).send(tags))
          .catch(error => res.status(500).send("Server error"))
      })
      .catch(error => res.status(500).send("Server error"))
  },

  destroy: (req, res) => {
    Tag
      .findById(req.params.id)
      .then(tag => {
        if (!tag)
          return res.status(404).send({ message: "Tag not found" })
        tag
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(500).send("Server error"))
      })
      .catch(error => res.status(500).send("Server error"))
  }

}
