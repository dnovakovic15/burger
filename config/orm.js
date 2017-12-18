let con = require('./connection.js');

let orm = {
    selectAll: function(tableName, cb){
        let sql = 'SELECT * FROM ??'

        con.query(sql, [tableName], function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);

            if(cb){
                cb(result);
            }
        });
    },

    insertOne: function(tableName, columnName, columnValue, cb){
        let sql = 'INSERT INTO ?? (??) VALUES (?)'

        con.query(sql, [tableName, columnName, columnValue], function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
            
            if(cb){
                cb(result);
            }
        });
    },

    updateOne: function(newBurger, oldBurger, cb){
        let sql = 'UPDATE burgers SET burger_name = ? WHERE burger_name = ?'

        con.query(sql, [newBurger, oldBurger], function (err, result) {
            if (err) throw err;
            console.log("Result: " + result);
            
            if(cb){
                cb(result);
            }
        });
    }
};

module.exports = orm;

