console.log('Chai or Code');
require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',function(req,res){
    res.send("Paras Bhatt")
})
app.get('/login',function(req,res){
    res.send('<h1>Pls Login at Chai or code</h1>')
})
app.get('/youtube',function(req,res){
res.send('Welcome to Our Yt Page')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})