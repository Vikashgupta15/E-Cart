import Laptop from "../model/Laptop.model.js";

export const getLaptop= async(req,res)=>{
    
    try {
        const laptop = await Laptop.find()
        res.status(200).json(laptop)
    } catch (error) {
        console.log("Error Controller: ", error)
        res.status(500).json(error)
    }
}