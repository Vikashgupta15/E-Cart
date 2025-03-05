import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { Link } from "react-router-dom";
// import laptop from "../../public/List.json";

function Course() {
  const [laptop , setlaptop]= useState([]);
  useEffect(()=>{
    const getlaptop = async()=>{
      try {
       const res = await axios.get("http://localhost:4001/laptop");
       console.log(res.data);
       setlaptop(res.data);
      } catch (error) {
        console.log("Error: ",error);
      }
    }
    getlaptop();
  },[])

  const AuthUser = localStorage.getItem("Users")

  const latestPhone = laptop.filter((item) => item.category === "Latest");
  const OneYearoldPhone = laptop.filter((item) => item.category === "One year old");
  const TwoYearoldPhone = laptop.filter((item) => item.category === "Two year old");
  
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        {AuthUser=="false"?
        <div className="mt-16 w-full h-screen items-center justify-center text-center flex"> 
        <div>
        <h1  className="mt- text-3xl my-5 text-red-500 font-bold">Oop's, You are not Loged-In !</h1>
        <p className="text-gray-400">Login to get more letest Component in low price </p>
        </div>
        </div>:
        <div className="dark:bg-slate-900 dark:text-white bg-slate-200 text-gray-950">
          <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
            <div className=" mt-28 items-center justify-center text-center">
              <h1 className="text-2xl md:text-4xl">
                We're delighted to have you{" "}
                <span className=" text-pink-700">Here! :)</span>
              </h1>
              <p className=" mt-10 items-center justify-center text-center">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Impedit modi iste odit veniam exercitationem facere enim
                laudantium dignissimos cumque. Voluptatibus ratione quod ipsum
                veritatis non. Quas adipisci molestias ex explicabo, aliquid
                totam atque quaerat, animi, omnis perferendis dignissimos vel
                dolor nihil corporis repellat nemo? Porro ad quia ipsum eos
                illum.
              </p>
              <Link to="/">
                <button className="mt-10 bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-cyan-800 duration-200">
                  Back
                </button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center w-full ">
            <div className="">
              <div className="  mt-12 grid grid-cols-1 md:grid-cols-3">
                {latestPhone.map((item) => (
                  <Card item={item} />
                ))}
              </div>
              <div className=" mt-12 grid grid-cols-1 md:grid-cols-3">
                {OneYearoldPhone.map((item) => (
                  <Card item={item} />
                ))}
              </div>
              <div className=" mt-12 grid grid-cols-1 md:grid-cols-3">
                {TwoYearoldPhone.map((item) => (
                  <Card item={item} />
                ))}
              </div>
                  {/* Add Elements */}
                {/* <div className=" mt-4 my-3 p-3 ">
                  <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
                    <figure className="">
                      <input className="bg-slate-700" type="file" accept=""/>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title" >
                        Item Name
                        <div className="badge badge-secondary">item category</div>
                      </h2>
                      <h3 className="card-title text-teal-600 ">₹ 00.00</h3>
                      <p>hii Golden</p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="border  cursor-pointer p-3 rounded-xl hover:bg-gray-800 hover:text-cyan-600">Uppload</div>
                      </div>
                    </div>
                  </div>
                </div> */}
            </div>
          </div>
        </div>}
      </div>
    </>
  );
}

export default Course;
