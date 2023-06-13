const express = require('express')
const app = express()
const Port = 5000

//routes

app.get('/', function (req, res) {
    res.send('Jasons Node Route 1')
})

app.listen(Port, ()=> {
    console.log('Jasons Node API web app is running on port ' + Port)
})
