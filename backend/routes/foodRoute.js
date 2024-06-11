import express from "express"
import { addFood, listFood, removeFoods } from "../controllers/foodController.js"
import multer from "multer"

const foodRouter = express.Router();

//image storage engine
const storage = multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage: storage})

//routes for various task to perform

foodRouter.post("/add", upload.single("image"),addFood);
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFoods)

export default foodRouter;