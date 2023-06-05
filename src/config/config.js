require('dotenv').config;

const config = {
    app:{
        port: process.env.PORT || 4000,
    },
    databseuri:{
        uri: process.env.DATA_BASE_URL || 'mongodb://localhost:27017/todo',
    },
    serverUri:{
        uri: process.env.SERVER_URL || 'http://localhost:'
    }
}

module.exports = config