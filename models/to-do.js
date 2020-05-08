const orm = require("../config/orm")
const model = {
    selectAll: function(controllercb) {
        orm.selectAll("actionitems", function(itemData) {
            controllercb(itemData)
        })
    }
}

module.exports = model