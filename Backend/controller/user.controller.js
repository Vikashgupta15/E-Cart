import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";


export const signup = async (req,res)=>{

    try {
        const { fullname, email, password } = req.body;
        const user= await User.findOne({email});
        if(user){
            return res.status(400).json({message:"User already exisist"});
        }
        const hashPassword= await bcryptjs.hash(password,10)
        const createUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword
        });
        await createUser.save();
        res.status(201).json({message:"User create Successfully",user:{
            _id: createUser._id,
            fullname: createUser.fullname,
            email: createUser.email
        }});
    } catch (error) {
        console.log("Error User: " + error.message);
        res.status(500).json({message:"Internal server error"});
    }

};

export const login = async (req,res)=>{
    try {
        const {email,password} =req.body;
        const user = await User.findOne({email});
        const isMatch =await bcryptjs.compare(password,user.password);
        if(!user || !isMatch){
            res.status(400).json({message:"Invalid Username Or password"});
        }else{
            res.status(200).json({message:"Login successfull",user:{
                id:user.id,
                fullname:user.fullname,
                email:user.email
            }})
        }
    } catch (error) {
        console.log("Error Login: "+ error.message)
        res.status(500).json({message: "Internal server error"})
        
    }
}