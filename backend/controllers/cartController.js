import userModel from "../Models/userModel.js"

// add items to user cart
export const addToCart = async (req,res) => {
    try{
        // console.log(req.body)
        let userData = await userModel.findById({_id:req.body.userId})
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({
            success:true,
            message:"Added To Cart"
        })
    }
    catch(error){
        console.log(error)
        res.json({
            success:false,
            err:error,
            message:"Error Occurred"
        })
    }

}

export const removeFromCart = async (req,res) => {
     try {
       // console.log(req.body)
       let userData = await userModel.findById({ _id: req.body.userId });
       let cartData = await userData.cartData;
       if (cartData[req.body.itemId]>0) {
         cartData[req.body.itemId] -= 1;
       }

       await userModel.findByIdAndUpdate(req.body.userId, { cartData });
       res.json({
         success: true,
         message: "Removed from Cart",
       });
     } catch (error) {
       console.log(error);
       res.json({
         success: false,
         err: error,
         message: "Error Occurred",
       });
     }

}

export const getCart = async (req,res) => {
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({
            success:true,
            message:"Successfully Fetched Cart data",
            cartData:cartData,
        })
    }
    catch(err){
        console.log(err)
        res.json({
            success:false,
            message:"error in fetching"
        })
        
    }

}

// export default { addToCart, removeFromCart, getCart };