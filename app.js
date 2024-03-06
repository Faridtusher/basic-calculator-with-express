const express = require('express')
const app = express();
const port = 3000
const hostname = '127.0.0.1'
const triangleRoute = require('./router/triangle.router')

// get the file
app.use(triangleRoute)

// create the home page
app.get('/', (req, res) =>{
   res.sendFile(__dirname+'/view/triangle.html')
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