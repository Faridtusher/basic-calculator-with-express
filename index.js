const {app, port, hostname} = require('./app')


// run the server
app.listen(port, hostname, () =>{
   console.log(`your server is running : http://${hostname}:${port}`)
})