//第一區塊 內建模組
const http = require('http');

// 第二個區塊 第三方模組(套件)
//第三區塊 自建模組
//require 是匯入hello.js檔案


/////////////////////////////////////////////////////////////

const server = http.createServer((req, res) => {
	// console.log('第一個參數是瀏覽器對 web server 的 request', req);
	// console.log('第二個參數是 web 要response 給瀏覽器的內容', res);
    console.log(req.url);
    if (req.url === '/login'){
        return res.end('This is login page');
    }
	res.end();
});

server.listen(3000, () => {
	console.log('running server on port 3000');
});
