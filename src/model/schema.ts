import { Schema ,Document } from "mongoose";
import mongoose from "mongoose";

export interface contactEmail extends Document{
    name: string,
    email: string,
    phone: string,
    subject: string,
    message: string
}

const contactDetail: Schema<contactEmail>= new Schema({
    name:{
        type: String,
        require: [true, "Name is required"]
    },
    email:{
        type: String,
        require: [true, "Email is required"],
        unique: true,
        match: [/.+\@.+\..+/, "enter a valid email"]
    },
    phone:{
        type: String,
    },
    subject:{
        type: String,
        require: [true, "Subject is required"]
    },
    message:{
        type: String,
        require: [true, "Message is required"]
    }
})

const contactModel = mongoose.models.contact || mongoose.model("contact" , contactDetail)
export default contactModel