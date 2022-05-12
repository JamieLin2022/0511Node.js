//第一區塊 內建模組
const path = require('path');

// 第二個區塊 第三方模組(套件)
const express = require('express')

//第三區塊 自建模組



/////////////////////////////////////////////////////////////

const app = express();

app.use(express.static(path.join(__dirname, 'public')));


//middleware 介於瀏覽器 web server之間
// app.use((req, res, next) => {
// 	console.log('Hello!');
//     next();
// });

// app.use((req, res, next) => {
// 	console.log('World!');
//     next();
// });

//get是一個路由的請求，在localhost:3000底下
app.get('/', (req, res) => {
    //node js 內建模組做法
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    // res.write('<head><meta charset="utf-8" /></head>')
    // res.write('<body>')
    // res.write('<h1>這是首頁</h1>')
    // res.write('</body>')
    //express套建模組做法
    res.status(200) //把網頁連接到views裡的index.html，200代表請求成功
        .sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.status(200) 
    .sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
});