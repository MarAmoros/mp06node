const { text } = require("express");
const express = require("express");
const app = express();

app.get("/", (req,res) =>{

    res.send(
    "<h1>Buscador de alumnos: </h1> <input>"
 
    )

});

app.listen(8000, () => {
    console.log("Example app listening port 8000")
});
