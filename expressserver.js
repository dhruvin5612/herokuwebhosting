const express = require("express");
const app = express();

// to access the value which is in the body
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

// creat owne server ...........
// app.get("/", function(req, res){
//     res.send("welcome to my channel");
// })

app.get("/", function (req, res) {

    // to send the file use that......................___dirname is your file exsist file directory path    ++++    your html file which you want to render 
    res.sendFile(__dirname+"/index.html");
})


// to render the responce use POST method and res.send method to render this result .......................
app.post("/", function (req, res) {
    console.log(req.body);
    let n1 = Number(req.body.v1);
    let n2 = Number(req.body.v2);
    


    let sum = n1+n2;
    console.log(sum);

    
    res.send("The sum is  : - "+ sum);

});


// to listen the website in-this port number...................and render the process.......
app.listen(3000, function(req, res){
    console.log("server is renning on port 3000");
});