/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require("path");

const URL = process.env.API_URL
console.log('porta', process.env.PORT)

const app = express()

app.use(express.static(path.join(__dirname, "build")));

app.use('/api/todo', createProxyMiddleware({target:URL, changeOrigin:true }))

app.get('/*', function(req,res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });