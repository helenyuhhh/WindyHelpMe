import express from "express";

const app = express()
app.get('/', (req, res)=>{
    res.send("Hello World")
})
app.get('/test', (req, res)=>{
    res.send("Hello World Test")
})

app.get('/windy', (req, res)=>{
    res.send("Hello Kaze yooooooo~")
})

// app service on azure always start on 8080
const PORT = 8080
app.listen(PORT, ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})