let con = require('./connection.js');

let orm = {
    selectAll: function(tableName, cb, res){
        let sql = 'SELECT * FROM ??'

        con.query(sql, [tableName], function (err, result) {
            if (err) throw err;

            if(cb){
                cb(result, res);
            }
        });
    },

    insertOne: function(tableName, columnName, columnValue, cb){
        let sql = 'INSERT INTO ?? (??) VALUES (?)'

        con.query(sql, [tableName, columnName, columnValue], function (err, result) {
            if (err) throw err;
            
            if(cb){
                cb(result);
            }
        });
    },

    updateOne: function(tableName, columnName, newBurger, oldBurger, cb){
        let sql = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'

        con.query(sql, [tableName, columnName, newBurger, columnName, oldBurger], function (err, result) {
            if (err) throw err;
            
            if(cb){
                cb(result);
            }
        });
    }
};

module.exports = orm;

