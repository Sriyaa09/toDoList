//jshint esversion:6
const express=require("express");
const bodyParser=require("body-parser");
const app=express();
const date=require (__dirname+"/date.js");
// console.log(date());
let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  // let day=date.getDate();
    let day=date.getDate();
  // res.send("Hello");

  // var currentDay=today.getDay();
  // var day="";
  // if(today.getDay()==6||today.getDay()==0)
  // {
  //   res.send("Yeah its a weekend");
  // }
  // else
  // {
  //   res.send("I have to work !!");
  // }
  // if(currentDay==6||currentDay==0)
  // {
  //   day="Weekend";
  //   // res.send("Yeah its a weekend");
  //   // res.render("list",{kindOfDay:day});
  // }
  // else
  // {
  //   day="Weekday";
  //   // res.send("I have to work !!");
  //     // res.render("list",{kindOfDay:day});
  // }
  // switch (currentDay) {
  //   case 0:
  //   day="Sunday";
  //   break;
  //   case 1:
  //   day="Monaday";
  //   break;
  //   case 2:
  //   day="Tuesday";
  //   break;
  //   case 3:
  //   day="Wednesday";
  //   break;
  //   case 4:
  //   day="Thursday";
  //   break;
  //   case 5:
  //   day="Friday";
  //   break;
  //   case 0:
  //   day="Saturday";
  //   break;
  //   default:
  //   console.log("Error"+currentDay);
  //
  // }
  res.render("list",{listTitle:day,newListItems:items});
});
// app.post("/",function(req,res){
//   let item =req.body.newItem;
//   items.push(item);
//   // console.log(item);
//     // res.render("list",{newListItem:item});
//     res.redirect("/");
// });

app.post("/",function(req,res){
  // console.log(req.body);
  let item=req.body.newItem;
  if(req.body.list=="Work")
  {
workItems.push(item);
res.redirect("/work");
  }
  else
  {
    items.push(item);
    res.redirect("/");

  }


});
app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newListItems:workItems});
});
app.get("/about",function(req,res){
  res.render("about");
});
app.listen(3000,function(){
  console.log("Server strated on port 3000");
});
