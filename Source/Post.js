const express = require("express")
const app = express()
const bodyParser = require('body-parser')   
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.post('/', urlencodedParser, function (req, res) {     
    console.log(req.body.Lenguajes_de_programacion_1)     
    res.end()  
  })
           
  app.post('/', urlencodedParser, function (req, res) {      
    console.log(req.body.Lenguajes_de_programacion_2)      
    res.end()  
  })
          
  app.post('/', urlencodedParser, function (req, res) {      
    console.log(req.body.Lenguajes_de_programacion_3)  
    res.end()  
  })
          
  app.post('/', urlencodedParser, function (req, res) {       
    console.log(req.body.Lenguajes_de_programacion_4)    
    res.end()    
  })
           
  app.post('/', urlencodedParser, function (req, res) {
    console.log(req.body.Lenguajes_de_programacion_5)
    res.end()
  })
      
    
  
   
  app.listen(3000)