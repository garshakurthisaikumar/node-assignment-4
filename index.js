const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 5000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json())
// your code goes here
app.get("/", (req, res) => {
    res.send("Hello World");
   
})
app.get("/form", (req, res) => {
    res.render("form.ejs");
   
})
/////// adding 
app.post("/add", (req, res)=>{
    console.log(req.body);
    if(Number(req.body.num1)&&Number(req.body.num2)<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })

    }
    else if(Number(req.body.num1)&&Number(req.body.num2)>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
  else{  res.status(200).send({
         status: "success",
    message: "the sum of given two numbers", 
   sum: Number(req.body.num1)+Number(req.body.num2) })
  }
});
///////// substracting
app.post("/sub", (req, res)=>{
    console.log(req.body);
    if(Number(req.body.num1)&&Number(req.body.num2)<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })

    }
    else if(Number(req.body.num1)&&Number(req.body.num2)>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
  else {  res.status(200).send({
         status: "success",
    message: "the difference of given two numbers", 
   difference: Number(req.body.num1)-Number(req.body.num2) })
  }
});
///////// multiplying 
app.post("/multiply", (req, res)=>{
    console.log(req.body);
    if(Number(req.body.num1)&&Number(req.body.num2)<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })

    }
    else if(Number(req.body.num1)&&Number(req.body.num2)>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
   else{ res.status(200).send({
         status: "success",
    message: "the product of given two numbers", 
   result: Number(req.body.num1)*Number(req.body.num2) })
   }
});
//////// dividing
app.post("/divide", (req, res)=>{
    console.log(req.body);
    if(Number(req.body.num2)===0){
        res.status(404).send({
            status:"error",
            message:"Cannot divide by zero",
        })
    }
    if(Number(req.body.num1)&&Number(req.body.num2)<-1000000){
        res.status(404).send({
            status:"error",
            message:"underflow"
        })

    }
    else if(Number(req.body.num1)&&Number(req.body.num2)>1000000){
            res.status(404).send({
                status:"error",
                message:"overflow"
            })
    }
   else{ res.status(200).send({
         status: "success",
    message: "the division of given two numbers", 
   result: Number(req.body.num1)/Number(req.body.num2) })
   }
});

app.listen(5000, () => console.log(`App listening on port 5000`))

module.exports = app;

