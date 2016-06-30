const express = require('express')
const app = express()
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')


app.set('view engine', 'pug')
app.use(express.static('www'))
app.get('/', function(req, res) {
    res.render("index", {
      "title": "Louie Adamian"
    })
})

app.listen(2001, () => {
    console.log('personal site is listening on port 2001')
})
