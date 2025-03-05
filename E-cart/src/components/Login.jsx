import React, { useState } from "react";
import toast from "react-hot-toast";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function Login() {
  const {register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = async (data) => {
    const userInfo={
      email:data.email,
      password:data.password
    }
    await axios.post("http://localhost:4001/user/login",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("Login Successfully")
        window.location.reload()
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user));
    }).catch((err)=>{
      console.log(err.response)
      toast.error("Error Signin:" + err.response.data.message);
    })

  };

  return (
    <div className="">
      <dialog id="Signin" className="modal ">
        <div className="modal-box bg-slate-300 dark:bg-slate-800">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              // to="/signup"
              onClick={() => document.getElementById("Signin").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Log In</h3>
            {/* Email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className=" w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              /><br/>
              {errors.email && <span className="text-red-500 text-xs ml-5">This field is required</span>}

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
              /><br/>
              {errors.password && <span className="text-red-500 text-xs ml-5">This field is required</span>}
              
            </div>
            <div className="mt-10 flex justify-around ">
              <p>
                Not registered ?{" "}
                <Link
                  to="/signup"
                  onClick={() => document.getElementById("Signin").close()}
                  className="text-blue-700 cursor-pointer hover:text-blue-500 duration-200"
                >
                  Sign-Up
                </Link>
              </p>
              <button className="btn px-3 py-3 ml-4 ">Login</button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
