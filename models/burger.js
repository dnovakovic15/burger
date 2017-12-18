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

    updateOne: function(newBurger, oldBurger){
        return orm.updateOne(newBurger, oldBurger);
    }
}

module.exports = burgers;