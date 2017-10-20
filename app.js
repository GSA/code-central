const express = require('express')
const config = require('./config/config')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

const productController = require('./controllers/product_controller')

router.get('/products', productController.index)
router.get('/products/:id', productController.show)
router.post('/products', productController.create)
router.put('/products/:id', productController.update)
router.delete('/products/:id', productController.destroy)

app.use(bodyParser.json())
app.use('/api', router)

app.get('/', (req, res) => {
  res.send('')
})

let server = app.listen(config.port, () => {
  console.log(`Listening on port ${server.address().port} (environment: ${config.env})`)
})

module.exports = app
