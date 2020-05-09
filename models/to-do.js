const orm = require("../config/orm")
const model = {
    selectAll: function (controllercb) {
        orm.selectAll("actionitems", function (itemData) {
            controllercb(itemData)
        })
    },
    insertOne: function (newBody, controllercb) {
        orm.insertOne("actionitems", ["name", "description", "complete"], newBody, function (itemData) {
            controllercb(itemData)
        })
    },
    updateOne: function (condition, controllercb) {
        orm.updateOne("actionitems",
            ["name", "description", "complete"], condition, function (itemData) {
                controllercb(itemData)
            })
    }
}

module.exports = model