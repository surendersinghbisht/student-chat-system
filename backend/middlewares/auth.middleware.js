import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies["chat-token"]; // Ensure cookie parser is enabled
        
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify JWT token

        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized: Invalid token" });
        }

        const user = await User.findById(decoded.id).select("-password"); // Exclude password for security

        if (!user) {
            return res.status(403).json({ message: "Forbidden: User not found" });
        }

        req.user = user; // Attach user object to request
        next(); // Proceed to the next middleware or route
    } catch (error) {
        console.error("Error in authMiddleware:", error);
        return res.status(401).json({ message: "Unauthorized: Token verification failed" });
    }
};
