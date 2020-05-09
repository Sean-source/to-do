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
        const queryString = "Update" + tableName;
        queryString += " SET ";
        queryString += objToSql(columns);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            modelcb(result);
        });

    }
}

module.exports = orm