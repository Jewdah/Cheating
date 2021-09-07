const express = require("express")
const app = express()
const bodyParser = require('body-parser')   
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })




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
    res.send("Seis Get ")
   })
   
  
   
   app.get("/", function (req, res) {
    res.send("Hello World")
   })
   
   app.get("/Spanish", function (req, res) {
       res.send("Hola mundo")
      })
   
   app.get("/Italiano", function (req, res) {
       res.send("Ciao mondo")
      })
   
   

   
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