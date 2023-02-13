const mongoose=require("mongoose")

const productSchema=new mongoose.Schema(
    {
        name: { type: String },
        mobileno: { type: Number },
        email: { type:String, unique: true },
        state: { type:String },
        city: { type: String },
        description: { type: String },
        image: { type: String },
       
      }
    
);

module.exports=mongoose.model("registration",productSchema);
// const mongoose=require("mongoose")

// const productSchema=new mongoose.Schema({
//     name:String,
//     price:String,
//     category:String,
//     userId:String,
//     company:String
// });

// module.exports=mongoose.model("products",productSchema);