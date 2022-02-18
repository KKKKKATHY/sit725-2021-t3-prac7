const express = require("express")
const router = express.Router()

const Controller = require("../controllers")

router.get("/init", function(req, res) {
    Controller.page.initPage(res)
})

router.post("/book", function(req, res) {
    console.log('--> server recv: book: ', req.body)
    Controller.page.makeBookAppoint(req.body, res)
})

router.get("/booklist", function(req, res) {
    Controller.page.getBookAppoint(res)
})

module.exports = router