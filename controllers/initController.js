const Service = require("../services")

const initPage = (res) => {
    Service.KathyServices.initContent(res)
}

const makeBookAppoint = (data, res) => {
    Service.KathyServices.book(data, res)
}

const getBookAppoint = (res) => {
    Service.KathyServices.bookList(res)
}

module.exports = {initPage, makeBookAppoint, getBookAppoint}