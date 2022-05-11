// hello.js
const title='I am Hello Module';

const sayHello = () => {
    console.log('Hello!');
};

//匯出上面這個module，say是自訂的匯出名稱
module.exports.sayHello = sayHello;


// module.exports.sayHello = sayHello;

// module.exports = {
//     sayHello: sayHello,
//     sayGoodnight: sayGoodnight,
//     title: title
// };

// JS remarks:
module.exports = {
    sayHello,  // = sayHello: sayHello
    sayGoodnight,
    title,
};