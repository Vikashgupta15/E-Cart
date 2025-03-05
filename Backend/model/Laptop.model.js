import mongoose from "mongoose";

const LaptopSchema = mongoose.Schema({      // Make a Documents in Database
    name: String,
    price: String,
    category: String,
    titel: String,
    image: String
});

const Laptop = mongoose.model("Laptop",LaptopSchema);   // Make a Collection(Laptop) of Document() in Database
export default Laptop;