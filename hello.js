// hello.js
const path = require('path');

const title='I am Hello Module';

const sayHello = () => {
    console.log('Hello!');
};

//匯出上面這個module，say是自訂的匯出名稱
// module.exports.sayHello = sayHello;


// module.exports.sayHello = sayHello;

//如果key 跟 value是一樣的內容，可以直接省略value的內容 (ex:sayHello)
// module.exports = {
//     sayHello,
//     sayGoodnight: sayGoodnight,
//     title: title
// };

//動態提供當下的位置
// console.log('dirname', __dirname);
// console.log('filename', __filename);
// console.log(path.join(__dirname, 'index.js'));


// JS remarks:
module.exports = {
    sayHello,  // = sayHello: sayHello
    sayGoodnight,
    title,
};

console.log('module', module);