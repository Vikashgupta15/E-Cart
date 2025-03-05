import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { json, Link, Navigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";

function Signup() {
  const [User , setUser] = useState("false")
  let user;
  const {register,handleSubmit,formState: { errors },} = useForm();

  useEffect(()=>{
     user = localStorage.getItem("Users")
  },[localStorage])
  
  const onSubmit = async (data) => {
    const userInfo={
      fullname:data.fullname,
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Signup Successfully")
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
      setUser(user)
    }).catch((err)=>{
      console.log(err.response)
      toast.error("Error Signin:" + err.response.data.message);
    })
    
  };
  console.log(User)

  return (
    <div className="flex h-screen items-center justify-center bg-gray-800">
      <div id="Signup" className="w-[600px]">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
            <h3 className="font-bold text-lg">Sign Up</h3>
            {/* Name */}
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="name"
                placeholder="Enter your name"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-red-500 text-xs ml-5">
                  This field is required
                </span>
              )}
            </div>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-red-500 text-xs ml-5">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-red-500 text-xs ml-5">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-10 flex justify-around ">
              <p>
                Have allready an account ?{" "}
                <button
                onClick={() => document.getElementById("Signin").showModal()}
                className="text-blue-700 cursor-pointer hover:text-blue-500 duration-200">
                  Logn In
                </button>
                <Login />
              </p>
              <button className="btn px-3 py-3 ml-4 ">Login
                {/* <Link to={User=="false"? "":"/"}>Login</Link> */}
              </button>
              <Navigate to={User=="false"? "/signup":"/"}/>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
