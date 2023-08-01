import mongoose from "mongoose"

const chatSchema = mongoose.Schema(
    {
        members:{type:Array,},
    },
    {timestamp:true,}
);

const chatModel = mongoose.model("chat",chatSchema)
export default chatModel