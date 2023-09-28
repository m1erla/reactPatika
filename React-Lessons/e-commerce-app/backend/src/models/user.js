import mongoose, { mongo } from "mongoose";
import bcrypte from "bcrypt";

const Schema =  mongoose.Schema;

const UserSchema = new Schema ({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        toJSON: false,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
}) 

UserSchema.pre("save", async function (next) {
    try{
        if(this.isNew){
            const salt = await bcrypte.genSalt(10);
            const hashed = await bcrypte.hash(this.password, salt);
            this.password = hashed;
        }
        next();
    }catch(e) {
        next(error);
    }
});

UserSchema.methods.isValidPass = async function (pass) {
    return await bcrypte.compare(pass, this.password);
};

const User = mongoose.model("user", UserSchema);

export default User;