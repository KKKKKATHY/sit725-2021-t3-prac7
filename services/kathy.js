const client = require("../dbConnection")
let collection = null

setTimeout(function() {
    collection = client.mongoClient.db("project-kathy").collection("page-content")
    bookCollection = client.mongoClient.db("project-kathy").collection("book-content")
}, 2000);

const initContent = function(res) {
    collection.find().toArray(function(err, result) {
        if(err) {
            throw err
        }
        res.send({result, statusCode: 200})
    })
}

const book = function(data, res) {
    console.log('---> place book order')
    bookCollection.insertOne(data, (err, result) => {
        res.sendStatus(204)
    })
}

const bookList = function(res) {
    bookCollection.find().toArray(function(err, result) {
        if(err) {
            throw err
        }
        res.send({result, statusCode: 200})
    })
}

module.exports = {
    initContent,
    book,
    bookList
}