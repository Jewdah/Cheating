//Declaracion de Variables
const express = require("express")
const app = express()
const bodyParser = require('body-parser')   
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


//Codigo Funciones Get
  
app.get("/", function (req, res) {
  res.send("Primer GET")
})
  
app.get("/2", function (req, res) {  
  res.send("Segundo GET") 
})
  
app.get("/3", function (req, res) {
  res.send("Tercer Get")
})
  
app.get("/4", function (req, res) { 
  res.send("Cuarto Get ")
})
   
app.get("/5", function (req, res) { 
  res.send("Cinco Get ") 
})
   
app.get("/6", function (req, res) {  
  res.send("Seis Get")
})

//Funciones con Idioma

app.get("/portugues", function (req, res) {     
  res.send("Olá, mundo na web com JavaScript.")  
})  
   
app.get("/italiano", function (req, res) {      
  res.send("Ciao mondo sul web con JavaScript.")
})

app.get("/ruso", function (req, res) {   
  res.send("Привет, мир в Интернете с помощью JavaScript.")
})

app.get("/frances", function (req, res) {      
  res.send("Bonjour tout le monde sur le web avec JavaScript.")
})

app.get("/espanol", function (req, res) {   
  res.send("Hola mundo en la web con JavaScript.")
})
    
//Codigo de las Solitudes Post  
   
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