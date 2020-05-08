const model = require("../models/to-do")

function toDo (app) {
    app.get("/", function(req, res) {
        model.selectAll(function(itemData) {
            res.render("index", {actionitems: itemData})
        })
    })
    app.post("/api/items", function(req, res) {
        const newBody = req.body;
        model.insertOne(newBody, function(itemData) {
            res.json(itemData);
        })

    })

}


module.exports = toDo