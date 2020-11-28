const express = require('express')
const handlebars = require('express-handlebars') // 引入 handlebars
const bodyParser = require('body-parser')

const db = require('./models') // 引入資料庫
const app = express()
const port = 3000

app.engine('hbs', handlebars({ defaultLayout: 'main', extname: '.hbs' })) // Handlebars 註冊樣板引擎
app.set('view engine', 'hbs') // 設定使用 Handlebars 做為樣板引擎

app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

require('./routes')(app)

module.exports = app
