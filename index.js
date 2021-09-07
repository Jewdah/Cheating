const express = require("express")
const app = express()
app.get("/", function (req, res) {
 res.send("Primer GET")
})

 
app.listen(3000)