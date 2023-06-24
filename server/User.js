const mongoose=require('mongoose')
const HotelsImagesSchema = new mongoose.Schema({
    name: String,
    img:
    {
        data: Buffer,
        contentType: String
        }
  });

  module.exports=mongoose.model("User",HotelsImagesSchema);
