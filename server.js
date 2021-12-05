var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cardlist =[
  {
  title: "Kitten 2",
  image:"images/HP.jpg",
  link:"About kitten 2",
  description:"Demo description about kitten 2"
  },
  {
  title:"kitten 3",
  image:"image/HP.jpg",
  link:"About kitten",
  description:"Demo description about kitten"
  }
]

app.get('/api/projects',(req,res) => {
  res.json({status: 200, data:cardlist, message:"Success"})
})


var port = process.env.PORT || 3000;

app.listen(port,()=>{
  console.log("App listening to: "+port);
});


