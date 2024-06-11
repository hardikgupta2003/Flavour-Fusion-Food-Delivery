import mongoose from "mongoose"

export const DBConnect = async () => {
    await mongoose.connect("mongodb+srv://hardikgupta:gQLqOgNR26ZHbqIF@cluster0.a1ttvze.mongodb.net/Food-DelDB")
    .then(()=>{
        console.log('DB connected successfully')
    })
    .catch((e)=>{
        console.log("DB connection Failed : ",e)
    })
}