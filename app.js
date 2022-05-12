// 第一個區塊 內建模組
const path = require('path');

// 第二個區塊 第三方模組(套件)
const express = require('express');
const bodyParser = require('body-parser');

// 第三個區塊 自建模組

////////////////////////////////////////////////////////////////
const app = express();

// middleware
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
	console.log('Hello!');
    next();
});
app.use((req, res, next) => {
	console.log('World!');
    next();
});

app.get('/', (req, res) => {
    res.status(200)
    // 改成用ejs套件渲染
    .render('index');
       
});
app.get('/login', (req, res) => {
    res.status(404)
    .render('login');
       
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
        res.redirect('/');
    } else {
        console.log('欄位尚未填寫完成！')
    }
});

//*是萬用路由，要放在最後面~
app.get('*', (req, res) => {
    res.status(404)
    .render('404')
    
});

app.listen(3000, () => {
	console.log('Web Server is running on port 3000');
}); 