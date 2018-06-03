"use strict"

const express = require("express");

const app = express();

app.get("/",function (req,res) {
    app.use(express.static("webapp"));
});

app.listen(9090,function (err) {
    if (err){
        console.log(err);
    }
    console.log("Server is started!");
})