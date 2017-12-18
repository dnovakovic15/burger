let orm = require('../config/orm.js');

let burgers = {
    selectAll: function(){
        return orm.selectAll('burgers');
    },

    insertOne: function(burgerName){
        return orm.insertOne('burgers', 'burger_name', burgerName);
    },

    updateOne: function(newBurger, oldBurger){
        return orm.updateOne(newBurger, oldBurger);
    }
}

module.exports = burgers;