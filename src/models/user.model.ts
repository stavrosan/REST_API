import mongoose from "mongoose";
import IUser from "../interfaces/user.interface";


//create the mongoose model
const userSchema = new mongoose.Schema(   
    {
        name: { type: String, required: true},
        email: { type: String, require: true},
        password: { type: String, require: true}
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model<IUser>("User", userSchema);
export default User;