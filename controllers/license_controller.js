const License = require('../models').License

module.exports = {

  index: (req, res) => {
    License
      .findAll({ where: { productId: req.params.productId } })
      .then(licenses => {
        return res.status(200).send(licenses)
      })
      .catch(error => res.status(500).send("Server error"))
  },

  show: (req, res) => {
    License
      .findById(req.params.id)
      .then(license => {
        if (!license)
          return res.status(404).send({ message: "License not found" })
        return res.status(200).send(license)
      })
      .catch(error => res.status(500).send("Server error"))
  },

  create: (req, res) => {
    License
      .create({
        url: req.body.url,
        name: req.body.name,
        productId: req.params.productId
      })
      .then(license => res.status(201).send(license))
      .catch(error => res.status(500).send("Server error"))
  },

  update: (req, res) => {
    License
      .findById(req.params.id)
      .then(license => {
        if (!license)
          return res.status(404).send({ message: "License not found" })
        license
          .update({
            url: req.body.url || license.url,
            name: req.body.name || license.name
          })
          .then(() => res.status(200).send(license))
          .catch(error => res.status(500).send("Server error"))
      })
      .catch(error => res.status(500).send("Server error"))
  },

  replace: (req, res) => {
    License
      .destroy({ where: { productId: req.params.productId } })
      .then(() => {
        const licenseObjects = req.body.licenses || []
        licenseObjects.map(l => l.productId = req.params.productId)
        License
          .bulkCreate(licenseObjects)
          .then(() => License.findAll({ where: { productId: req.params.productId } }))
          .then((licenses) => res.status(200).send(licenses))
          .catch(error => res.status(500).send("Server error"))
      })
      .catch(error => res.status(500).send("Server error"))
  },

  destroy: (req, res) => {
    License
      .findById(req.params.id)
      .then(license => {
        if (!license)
          return res.status(404).send({ message: "License not found" })
        license
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status(500).send("Server error"))
      })
      .catch(error => res.status(500).send("Server error"))
  }

}
