const connection = require("./connection")

orm = {
    selectAll: function(tableName, modelcb) {
        connection.query("SELECT * FROM ??", tableName, function(err, data) {
            modelcb(data);
        })

    }
}

module.exports = orm