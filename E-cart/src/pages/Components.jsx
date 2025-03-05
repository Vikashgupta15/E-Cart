import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartA from "../components/CartA";
import ListItem from "../../public/Product1.json";
import CartB from "../components/CartB";

function Contact({ value }) {
  // const [laptop,setlaptop]= useState([]);
  // useEffect(()=>{
  //   const getlaptop = async()=>{
  //     try {
  //      const res = await axios.get("http://localhost:4001/laptop");
  //      console.log(res.data);
  //      setlaptop(res.data);
  //     } catch (error) {
  //       console.log("Error: ",error);
  //     }
  //   }
  //   getlaptop();
  // },[]);

  const LaptopItem = ListItem.filter((item)=>item.productCategory === "laptop");
  const PhoneItem =  ListItem.filter((item)=>item.productCategory === "phone");
  return (
    <>
      <div className=" ml-4 mb-20  dark:bg-slate-900 dark:text-slate-800 bg-slate-300">
        <div className="ml-4 mt-16 min-h-screen justify-center grid ">
          <div className="pt-4 ">
            <h1 className=" mb-6  text-3xl font-bold text-orange-600">
              DELL Laptops
            </h1>
            <p className="dark:text-slate-300 text-slate-900">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ut
              officia nesciunt dolore et iste! Itaque, modi fugiat?
            </p>
          </div>
          <div className="mt-6 md:mx-20 mx-2 grid items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3   ">
              {LaptopItem.map((item)=> <CartA item={item}/>)}
            </div>
            <div className="pt-4">
              <h1 className=" mb-6 mt-6  text-3xl font-bold text-orange-600">
                HP Laptop
              </h1>
              <p className="dark:text-slate-300 text-slate-900 ">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
                ut officia nesciunt dolore et iste! Itaque, modi fugiat?
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              {PhoneItem.map((item)=> <CartA item={item}/> )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
