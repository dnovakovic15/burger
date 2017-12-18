let orm = require('../config/orm.js');

let burgers = {
    selectAll: function(cb, res){
        if(cb){
            console.log('We HERE');
            orm.selectAll('burgers', cb, res);
        }
    },

    insertOne: function(burgerName){
        return orm.insertOne('burgers', 'burger_name', burgerName);
    },

    updateOne: function(burgerName){
        return orm.updateOne('burgers', 'devoured', 1, 'burger_name', burgerName);
    }
}

module.exports = burgers;