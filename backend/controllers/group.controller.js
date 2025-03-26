import Group from "../models/group.model.js";

export const createGroup = async(req, res)=> {
    try {
        const adminId = req.user._id;
const {name} = req.body;

if(!name || !adminId) {
    return res.status(400).json({message: "name and admin required to create a group"});
}

const group = await new Group({
    name,
    adminId
});

await group.save();

res.status(201).json({message: "group created sucessfully"});

    } catch (error) {
        console.log(error, "error in group controller");
        res.status(500).json({message: "internal server error"});
    }
}