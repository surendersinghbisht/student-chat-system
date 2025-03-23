import mongoose from "mongoose"
import moongose from "mongoose"
const groupSchema = moongose.Schema({
    name: {
type: String,
required: true
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    members : [{
        type: moongose.Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "message"
    }],
},{timestamps: true})

const group = new mongoose.model("Group", groupSchema);

export default group;