const express =require("express");
const bodyParser = require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");

})
app.post("/bmi",function(req,res){
    var w=parseFloat(req.body.weight)
    var h = parseFloat(req.body.height);
    var result = w/(h*h);
    res.send("<h1>BMI is</h1> " + result);
  
})
app.get("/bmi", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
  });
app.post("/bmi",function(req,res){
    var num1=Number(req.body.n1);
    var num2=Number(req.body.n2);
    var result =num1+num2;
    res.send("The result of the calculation is " +result);
})



app.listen(3000,function(){
    console.log("Server has Started");
})