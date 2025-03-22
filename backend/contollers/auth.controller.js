import User from "../models/user.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
export const signup = async(req, res)=> {
try {
    const {email, password} = req.body;
    if( !email || !username || !password){
        return res.status(400).json({message: "All fields are required"})
    }

    const existingEmail = await User.findOne({email});

    if(existingEmail) {
        return res.status(400).json({message: "User already exists"})
    }

   if(password.length < 6) {
    return res.status(400).json({message: "Password must be at least 6 characters"})
   }

   const salt = bcrypt.genSalt(10);
   const hashPassword = bcrypt.hash(password, salt);    
   const user = new User({
    email,
    user,
    username,
    password: hashPassword,
   })

   user.save();

   const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
   res.cookie("chat-token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 24 * 60 * 60 * 1000,
   });

   res.status(200).json({message: "User created successfully"}); 
} catch (error) {
    console.log(error, 'error in signup');
    res.status(500).json({message: "Something went wrong"})
}
}

export const login = async (req, res)=> {
try {
    const {username, password} = req.body;

    if(!username || !password) {
        return res.status(400).json({message: "All fields are required"})
    }

    const user = await User.findOne({username});

    if(!user) {
        res.status(400).json({message: "User does not exist"});
    }

    const isPasswordValid =  bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
        return res.status(400).json({message: "Invalid password"});
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.cookie("chat-token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({message: "User logged in successfully"});
} catch (error) {
    console.log(error, 'error in login');
    res.status(500).json({message: "Something went wrong"})
}
}