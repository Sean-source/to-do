const model = require("../models/to-do")

function toDo(app) {
  app.get("/", function (req, res) {
    model.selectAll(function (itemData) {
      res.render("index", { actionitems: itemData })
    })
  })
  app.post("/api/items", function (req, res) {
    const newBody = req.body;
    model.insertOne(newBody, function (itemData) {
      res.json(itemData);
    })

  })
  app.put("/api/items/:id", function (req, res) {
    const condition = req.params.id;
    console.log(JSON.stringify(req.body))
    model.updateOne(
      condition, function (result) {
        res.status(200).end();
      });
  })

}


module.exports = toDo