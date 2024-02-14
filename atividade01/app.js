const express = require('express')
var path = require('path')

const app = express()
const port = 3000

app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, './views'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/features', function (req, res) {
    res.send('features')
})

app.get('/pricing', function (req, res) {
    res.send('pricing')
})

app.get('/faqs', function (req, res) {
    res.send('faqs')
})

app.get('/about', function (req, res) {
    res.send('about')
})

app.get('/login', function (req, res) {
    res.render('login')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})