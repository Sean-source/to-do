const model = require("../models/to-do")

function toDo (app) {
    app.get("/", function(req, res) {
        model.selectAll(function(itemData) {
            res.render("index", {actionitems: itemData})
        })
    })

}


module.exports = toDo