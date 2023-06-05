const app = require('./app')
const config = require('./src/config/config')
const port = config.app.port
const hostName = config.serverUri.uri
app.listen(port, ()=>{
    console.log(`Your Server Successfull Running ${hostName}${port}`);
})