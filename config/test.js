let test = require('./orm.js');

let now = test.updateOne('hamburger', 'cheeseburger');

function printMe(now){
    console.log(now);
}
