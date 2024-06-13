import orderModel from "../Models/orderModel.js";
import userModel from "../Models/userModel.js"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
// placing the order for frontend
 const placeOrder = async (req,res) => {

    const frontend_url = "http://localhost:5173";
    try{
        const newOrder = new orderModel({
          userId: req.body.userId,
          items: req.body.items,
          amount: req.body.amount,
          address: req.body.address,
        });

        await newOrder.save();

        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}})

        const line_items = req.body.items.map((item)=> ({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*83
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
              currency:"inr",
            product_data:{
                name:"delivery Charges"
            },
            unit_amount:2*100*83
        },
        quantity:1
        })  

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:"payment",
            success_url:`${frontend_url}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url:`${frontend_url}/verify?success=false&orderId=${newOrder._id}`
        })
        res.json({
            success:true,
            session_url:session.url
        })    
    }
    catch(err){
        console.log(err)
       res.json({
         success: false,
         msg:"error occurred",
       });   
    }
}

export {placeOrder}