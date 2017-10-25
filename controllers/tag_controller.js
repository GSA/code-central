const Tag = require('../models').Tag

module.exports = {

  index: (req, res) => {
    Tag
      .findAll({ where: { productId: req.params.productId } })
      .then(tags => {
        return res.status(200).send(tags)
      })
      .catch(error => res.status(500).send(error))
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

  update: (req, res) => {
    Tag
      .findById(req.params.id)
      .then(tag => {
        if (!tag)
          return res.status(404).send({ message: "Tag not found" })
        tag
          .update({
            name: req.body.name || tag.name
          })
          .then(() => res.status(200).send(tag))
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
