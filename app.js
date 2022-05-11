//第一區塊 內建模組
const path = require('path');
const http = require('http');

// 第二個區塊 第三方模組(套件)
const cowsay = require('cowsay');
//第三區塊 自建模組
//require 是匯入hello.js檔案
const hello = require('./hello');

/////////////////////////////////////////////////////////////

//使用say的方法跟module，從hello.js
console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "oO",
    T : "U "
}));

