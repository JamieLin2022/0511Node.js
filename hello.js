// hello.js
const sayHello = () => {
    console.log('Hello!');
};

//匯出上面這個module，say是自訂的匯出名稱
module.exports.say = sayHello;