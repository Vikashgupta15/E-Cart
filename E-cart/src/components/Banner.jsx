import React from "react";
import banner from "../assets/iphone16.png";

import CoustomiseAdd from "./CoustomiseAdd";

const Banner = ({value}) => {
  const banner2 = "https://images.vexels.com/content/129234/preview/apple-logo-icon-bf9728.png";
  const banner3 = "https://freelogopng.com/images/all_img/1685901954apple-logo-design.png";
  const banner4 = "https://w7.pngwing.com/pngs/566/77/png-transparent-apple-logo-apple-watch-logo-apple-logo-heart-logo-computer-wallpaper-thumbnail.png";
  return (
    <>
      <div className="bg-white text-slate-900 dark:bg-slate-900 dark:text-slate-200 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-16">
        <div className="order-2 md:order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12 mb-9">
            <h1 className="text-4xl font-bold ">
              Vikash Gupta{" "}
              <span className="text-pink-500"> new everyday !!!</span>
            </h1>
            <CoustomiseAdd value={value}/>
            <p className=" text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              laborum ratione necessitatibus nisi aspernatur repudiandae
              excepturi temporibus accusamus animi dolore consectetur soluta
              repellat harum debitis earum deleniti cupiditate, voluptatibus
              unde nostrum recusandae, nobis at autem doloremque? Explicabo,
              illo.
            </p>
            <CoustomiseAdd value={value}/>
            {/* <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="text-slate-50 h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label> */}
          </div>
          {/* <button className="btn btn-primary mt-6">Primary</button> */}
        </div>
        <div className="order-1 md:mt-20 w-full md:w-1/2 ">
          <img className=" h-92 w-92" src={banner} alt="" />
          <CoustomiseAdd value={value}/>
        </div>
      </div>
    </>
  );
}

export default Banner;
