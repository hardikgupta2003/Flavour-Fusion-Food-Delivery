import foodModel from "../Models/foodModel.js";
import fs from "fs";
import foodRouter from "../routes/foodRoute.js";

// Add food item
const addFood = async (req, res) => {
  // Check if the image file is present in the request
  if (!req.file) {
    return res.json({
      success: false,
      message: "Image file is required",
    });
  }

  // Get the filename from the uploaded file
  let image_filename = req.file.filename;

  // Create a new food instance with the provided data
  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename, // Use the filename from the uploaded file
  });

  try {
    await food.save(); // Save the food item to the database
    res.json({
      success: true,
      message: "Food added",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Failed to add food",
    });
  }
};

// all food list 
const listFood = async (req,res) =>{
    try{
        const foods = await foodModel.find({});
        res.json({
            success:true,
            data:foods
        })

    }
    catch(err){
        console.log(error)
        res.json({
            success:false,
            message:err
        })
    }
}
//remove food items

const removeFoods = async (req,res)=>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{

        })

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({
            success:true,
            message:"Food is removed successfully"
        })
    }catch(err){
        console.log(err);
        res.json({
            success:false,
            message:"food removing failed"

        })
    }
}
export { addFood,listFood,removeFoods };
