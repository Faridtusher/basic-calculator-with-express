const express = require('express')
const app = express();
const port = 3000
const hostname = '127.0.0.1'
const bodyParser = require('body-parser')


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// create the home page
app.get('/', (req, res) =>{
   res.sendFile(__dirname+'/view/menu.html')
})

// req and response the triangle page
app.get('/triangle', (req, res) =>{
   res.sendFile(__dirname+'/view/triangle.html')
})

app.post('/triangle', (req, res) =>{
   const base = req.body.base;
   const height = req.body.height;

   res.send(`The triangle of ${base} and ${height} is : ${(base*height)/2}`)
})


// req and response the radius page
app.get('/circle', (req, res) =>{
   res.sendFile(__dirname+'/view/circle.html')
})

app.post('/circle', (req, res) =>{
   const radius = req.body.radius;
   const calculateRadius = 3.1416*radius*radius;
   res.send(`The circle of ${radius} is : ${calculateRadius} radius.`)
})

// create the not found page
app.use((req, res) =>{
   res.send('<h2>404!!! Not found</h2>')
})

module.exports = {
   app,
   port,
   hostname
}