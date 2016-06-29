const express = require('express');
const app = express();

app.set('view engine', 'pug')
app.use('/www', express.static('www'))
app.get('/', function(req, res) {
    res.render("index", {
      "title": "Louie Adamsian"
    })
})

server.listen(2001, () => {
    console.log('3D printer station is listening on port 2001');
})
