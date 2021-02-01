const express = require('express');
const app = express();
const page = require('./dist/main.js');
const path = require('path');
const fs = require('fs');
// const render = require('@vue/server-renderer');

const distPath = path.resolve(__dirname, './dist');
const templatePath = path.resolve(__dirname, './dist/index.html');
const template = fs.readFileSync(templatePath, 'utf8');

// 静态文件服务器
app.use((req, res, next) => {
    express.static(distPath, {
      maxAge: 0,
      index: false
    });
    next();
});

app.get('*', async (req, res) => {
    if (req.path === '/favicon.ico') return;
    console.log(req.path, 'mmmmmmmmmmmmmmmmmmmmmmmm');
    const html = await page.default();

    let temp = template;
    temp = temp.replace(/<!--vue-ssr-outlet-->/g, html);
    // 读取模板文件，进行替换
    
    
    // render.renderToString(page.default()).then(html => {
    //     console.log('vue server render: ', html)
    res.setHeader('Content-Type', 'text/html');
    res.send(temp);
    // })
})

app.listen(8055, () => {
    console.log('端口号8055');
});
