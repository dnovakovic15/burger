let test = require('./orm.js');

let now = test.updateOne('burgers', 'burger_name', 'Hawaii Burger', 'hamburger');

function printMe(now){
    console.log(now);
}
