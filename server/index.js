/* eslint-disable */
require('dotenv').config()
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require("path");

const URL = process.env.API_URL

const app = express()


app.use('/api/todo', createProxyMiddleware({target:URL, changeOrigin:true, pathRewrite: {'^/api/todo' : '/todo'} }))


app.listen(process.env.PORT || 3001, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });