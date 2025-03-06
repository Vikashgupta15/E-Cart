import React, { useEffect, useState } from "react";
import CartB from "./CartB";
import axios from "axios";
import phoneList from "../../public/Product1.json";

function ProductModel() {
  const [laptop,setlaptop]= useState([]);
  useEffect(()=>{
    const getlaptop = async()=>{
      try {
       const res = await axios.get("http://localhost:4001/laptop");
      //  console.log(res.data);
       setlaptop(res.data);
      } catch (error) {
        console.log("Error: ",error);
      }
    }
    getlaptop();
  },[]);
  const LaptopList = phoneList.filter((item) => item.productCategory === "laptop" || item.category === "Latest");
  const PhoneList = laptop
  console.log(laptop)

  return (
    <div className="text-black bg-white dark:bg-slate-900 dark:text-slate-300 max-w-screen-2xl mx-auto container  md:px-20 px-4 py-8 mt-20 ">
      <div>
        <h1 className="font-bold text-4xl">Laptop </h1>
        <p className="mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aut et, dolorum commodi sunt quaerat placeat vitae ab? Quod, eius!
        </p>
      </div>
      {/* CC-AA-RR-DD */}
      <div>
        <div className=" text-slate-300 mt-8 max-w-screen-2xl mx-auto container md:px-20 px-4 ">
          <div className=" grid grid-cols-1 md:grid-cols-3 mx-4">
            {LaptopList.map((item) => (
              <CartB key={item._id} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h1 className="mt-16 font-bold text-4xl">Phone </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aut et, dolorum commodi sunt quaerat placeat vitae ab? Quod, eius!
          </p>
        </div>
        <div className=" text-slate-300 mt-8 max-w-screen-2xl mx-auto container md:px-20 px-4 ">
          <div className=" grid grid-cols-1 md:grid-cols-3 mx-4">
            {PhoneList.map((item) => (
              <CartB item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModel;
