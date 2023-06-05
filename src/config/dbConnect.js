
const mongoose =require('mongoose');
const config = require('./config')
// Mongo DB Database Connection

let URI= config.databseuri.uri
let OPTION={user:'',pass:'',autoIndex:true}
const connectionDatabse = mongoose.connect(URI,OPTION,(error)=>{
    console.log("DataBase Connection Success")
    console.log(error)
})
module.exports = connectionDatabse