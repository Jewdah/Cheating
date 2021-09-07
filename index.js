const express = require("express")
const app = express()
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


 
app.listen(3000)