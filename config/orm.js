const connection = require("./connection")

orm = {
    selectAll: function (tableName, modelcb) {
        connection.query("SELECT * FROM ??", tableName, function (err, data) {
            modelcb(data);
        })

    },
    insertOne: function (tableName, columns, newBody, modelcb) {
        const statement = connection.query("INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?)", [tableName, ...columns, newBody.name, newBody.description, false], function (err, data) {
            modelcb(data);
        })
        console.log(statement.sql);
    },
    updateOne: function (tableName, columns, condition, modelcb) {

        connection.query("UPDATE ?? SET ?? = ? WHERE ? = id", [tableName, "complete", true, condition], function (err, data) {
            if (err) {
                throw err;
            }
            modelcb(data);
        })
    },
    deleteOne: function (tableName, condition, modelcb) {

        connection.query("DELETE FROM ?? WHERE ? = id", [tableName, condition], function (err, data) {
            if (err) {
                throw err;
            }
            modelcb(data);
        })
    }
}

module.exports = orm