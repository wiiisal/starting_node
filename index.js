const app=require('./app')
const express=require('express')
const port=app.get("port")
const {createProxyMiddleware}=require('http-proxy-middleware')
app.use(
    '/',createProxyMiddleware({
        target:'http://192.168.2.201:3000',
        changeOrigin:true
    })
)
app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})