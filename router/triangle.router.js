const express = require('express');
const triangleRoute = express.Router();
const path = require('path');


triangleRoute.get('/triangle', (req, res) =>{
  
   res.sendFile(__dirname+'/view/triangle.html')
  
})

// export the file
module.exports = triangleRoute;