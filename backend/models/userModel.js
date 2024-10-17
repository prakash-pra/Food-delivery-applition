import mongoose from "mongoose";
import mongoos from "mongoose";

const userSchema = new mongoos.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false },
);
const userModel = mongoos.model.user || mongoose.model("user", userSchema);
export default userModel;
