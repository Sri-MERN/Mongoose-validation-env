const mongodb = require('mongodb')
const dbName = process.env.DB_NAME
const dbUrl = `${process.env.DB_URL}/${dbName}`

module.exports = {mongodb,dbName,dbUrl}

// const mongodb = require ('mongodb')
// const dbName = 'Schema'
// const dbUrl = `mongodb+srv://Srikanth:@cluster0.xzqecjp.mongodb.net/${dbName}`

// module.exports = {mongodb,dbName,dbUrl}