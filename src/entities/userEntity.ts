import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {type:String,required:true},
  password: {type:String,required:true}
});


const UserEntity = mongoose.model("Users1", userSchema);

export default UserEntity;
