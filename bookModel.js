const mongoose = require('mongoose');
let mongooseSchema=mongoose.Schema;
const bookSchema=new mongooseSchema(
    {
    bname:String,
    author:String,
    price:Number,
    dop:Date
}
);
var bookModelObj=mongoose.model("books",bookSchema);
module.exports={bookModelObj};