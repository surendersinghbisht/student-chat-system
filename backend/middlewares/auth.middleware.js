import User from "../models/user.model.js";
export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies['chat-token'];
        if(!token) {
            return res.status(401).json({message: "Unauthorized"});
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded) {
            return res.status(401).json({message: "Unauthorized"});
        }

        const user = await User.findById(decoded.id);

        if(!user) {
            return res.status(401).json({message: "Unauthorized"});
        }
         
        req.user = user;
        next();
    } catch (error) {
        console.log(error,"error in middleware");
        return res.status(401).json({message: "Unauthorized"});
    }
}