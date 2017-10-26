const Usage = require('../models').Usage

module.exports = {

  index: (req, res) => {
    Usage
      .findAll()
      .then(usages => {
        return res.status(200).send(usages)
      })
      .catch(error => res.status(500).send("Server error"))
  },

  show: (req, res) => {
    Usage
      .findById(req.params.key)
      .then(usage => {
        if (!usage)
          return res.status(404).send({ message: "Usage not found" })
        return res.status(200).send(usage)
      })
      .catch(error => res.status(500).send("Server error"))
  },

}
