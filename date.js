//jshint esversion:6
// console.log(module);
exports.getDate=function(){
let today=new Date();
//javascript object
let options={
  weekday:"long",
  day:"numeric",
  month:"long"
};
return today.toLocaleDateString("en-US",options);
// return day;
};
exports.getDay=function (){
let today=new Date();
//javascript object
let options={
  weekday:"long",
  // day:"numeric",
  // month:"long"
};
return today.toLocaleDateString("en-US",options);
// return day;
};
// console.log(module.exports);
