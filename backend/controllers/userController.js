import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import User from "../Models/userModel.js"
import validatior from "validator"

const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}
//signup route handler
export const registerUser = async ( req,res)=>{
    try{
      //get data
      const { name, email, password } = req.body;

      //validation krlo bhai
      if (!name || !email || !password) {
        return res.status(402).json({
          success: false,
          message: "fill the fields correctly",
        });
      }

      //check if user is already present or not

      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(403).json({
          success: false,
          message: "user already exist ! kindly login ",
        });
      }
      if (!validatior.isEmail(email)) {
        return res.json({
          success: false,
          message: "Please enter a valid email address",
        });
      }
      if (password.length < 8) {
        return res.json({
          success: false,
          message: "Please enter a strong password",
        });
      }

      // here we come only if user is not present
      // generate hashed password
      let hashedPassword;
      const salt = await bcrypt.genSalt(10);
      try {
        hashedPassword = await bcrypt.hash(password, salt);
      } catch (err) {
        return res.status(500).json({
          success: false,
          message: "error in hashing password",
        });
      }

      //create entry for the user with the hashed password
      const newUser = new User({
        name: name,
        email: email,
        password: hashedPassword,
      });

      //save the newUser
     const user = await newUser.save();
      const token = createToken(user._id);
      //send the response
      return res.status(200).json({
        success: true,
        message: "newUser is created successfully",
        token,
      });
    }
    catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:'error in creating user'
        })
    }
}


export const loginUser = async (req,res)=>{
    try{
        //data fetch krlooo
        const {email,password} = req.body;
        //validiton krlo
        if(!email || !password){
            return res.status(420).json({
                success:false,
                message:"Please fill all the fields properly!"
            })
        }

        //check for registered user
        const existingUser = await User.findOne({email});
        
        if(!existingUser){
            return res.status(428).json({
                success:false,
                message:"user is not registered with us!"
            })
        }

        // const payload = {
        //   email: existingUser.email,
        //   id: existingUser._id
        // };

        //verify password & generate JWT token
        if(await bcrypt.compare(password,existingUser.password)){
            //password match
            const token = createToken(existingUser._id)

            existingUser.token = token;
            existingUser.password = undefined;


            const options = {
                expires:new Date(Date.now() + 3*24*60*60*1000),
                httpOnly:true,
            }

            res.status(200).cookie("token",token,options).json({
                success:true,
                message:"User logged in successfully!",
                user:existingUser,
                token
            })
            }
            else{
                // password dont match
                return res.status(403).json({
                    success:false,message:"password Incorrect",
                })
            }
        }
    
    catch(err){
        console.log(err);
        return res.status(500).json({
          success: false,
          message: "Login Failure",
        });
    }
}