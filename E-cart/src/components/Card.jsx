import React from "react";

function Card({ item }) {

  return (
    <>
      <div className=" mt-4 my-3 p-3 ">
        <div className="card bg-base-100 w-90 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border ">
          <figure className="">
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <h3 className="card-title text-teal-600 ">₹ {item.price}</h3>
            <p>{item.tittle}</p>
            <div className="card-actions justify-end">
              {/* <div className="badge badge-outline">Fashion</div> */}
              <div className="border  cursor-pointer p-3 rounded-xl hover:bg-gray-800 hover:text-cyan-600">Buy Now</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
