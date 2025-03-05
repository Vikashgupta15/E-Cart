import React from "react";

function CartA({ item}) {
  return (
    <div className={`my-4 mx-3`}>
      <div className=" card bg-base-100 image-full  shadow-xl">
        <figure>
          <img
            src={item ? item.productImage : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgemDlxkifja2XFRSp9qZcY6IJWaw0qLGpGmQ7Pgry-Zun2w7D7QoaZVb-CE2g4AHV_vc&usqp=CAU"}
            alt="Shoes"
            className="w-full "
          />
        </figure>
        <div className="card-body mt-9 ">
          <h2 className="card-title text-red-300 font-bold ">{item.productName}</h2>
          <p className="text-slate-300 ">
            {item.productDetail}
          </p>
          <div className="card-actions justify-end -mb-4 -mr-4">
            <button className="btn btn-primary  ">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartA;
