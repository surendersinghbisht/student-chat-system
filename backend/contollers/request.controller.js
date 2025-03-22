export const sendRequest = async (req, res) => {
    try {
        const {userId} = req.params;
        const senderId = req.user._id;

        const user = await User.findById(userId);

        if(user.friends.includes(senderId)) {
            return res.status(400).json({message: "User is already a friend"});
        }

        const existingRequest = await Request.findOne({sender: senderId, reciever: userId});

        if(existingRequest) {
            return res.status(400).json({message: "Request already sent"});
        }

        const request = new Request({
sender: senderId,
reciever: userId,
        });

        await request.save();
        res.status(200).json({message: "Request sent successfully"});
    } catch (error) {
        console.log(error, "error in sendRequest");
        res.status(500).json({message: "Internal server error"});
    }
}