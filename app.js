//第一區塊 內建模組
const path = reuire('path');
const http = require('http');

// 第二個區塊 第三方模組(套件)

//第三區塊 自建模組
//require 是匯入hello.js檔案
const hello = require('./hello');

/////////////////////////////////////////////////////////////

//使用say的方法跟module，從hello.js
hello.sayHello();

console.log(hello.title);