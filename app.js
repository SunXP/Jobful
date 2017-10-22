var express = require("express");
var app = express();
var request = require("request");

app.set("view engine", "ejs");

// request('http://www.google.com', function(error, response, body){
//     if(error){
//         console.log("something wrong");
//         console.log(error);
//     } else {
//         if(response.statusCode==200){
//             console.log(body)
//         }
//     }
//     });

app.get("/", function(req, res){
    res.render("landing")
});

app.listen(3000, function(){
    console.log("Server has started");
});