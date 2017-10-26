const express = require('express')
const config = require('./config')
const bodyParser = require('body-parser')

const app = express()
const router = express.Router()

const productController = require('./controllers/product_controller')
const tagController = require('./controllers/tag_controller')

router.get('/products', productController.index)
router.get('/products/:id', productController.show)
router.post('/products', productController.create)
router.put('/products/:id', productController.update)
router.delete('/products/:id', productController.destroy)

router.get('/products/:productId/tags', tagController.index)
router.get('/products/:productId/tags/:id', tagController.show)
router.post('/products/:productId/tags', tagController.create)
router.put('/products/:productId/tags', tagController.replace)
router.delete('/products/:productId/tags/:id', tagController.destroy)

app.use(bodyParser.json())
app.use('/api', router)

app.get('/', (req, res) => {
  res.send('')
})

let server = app.listen(config.port, () => {
  console.log(`Listening on port ${server.address().port} (environment: ${config.env})`)
})

module.exports = app
