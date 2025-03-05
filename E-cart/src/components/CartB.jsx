import React from "react";
// import List4 from "../../public/List4.json";

function CartB({item}) {
  

  return (
    <div>
      {/* <div className=" text-slate-300 mt-8 max-w-screen-2xl mx-auto container md:px-20 px-4 ">
        <div className=" grid grid-cols-1 md:grid-cols-3 mx-4"> */}
          <div className="card card-compact bg-base-100 my-3 mx-5 shadow-xl hover:scale-105 duration-200">
            <figure>
              <img
                src={item.productImage || item.image}
                alt="Shoes"
                className="w-full bg-slate-100"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.productName || item.name}</h2>
              <p>{item.productDetail || item.tittle}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          {/* <div className="card card-compact bg-base-100 my-2 mx-2 shadow-xl hover:scale-105 duration-200">
            <figure>
              <img
                src="https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/06/image-885.png?size=*:900"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 my-2 mx-2 shadow-xl hover:scale-105 duration-200">
            <figure>
              <img
                src="https://cf-img-a-in.tosshub.com/sites/visualstory/wp/2024/06/image-885.png?size=*:900"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex space-x-5 mt-8">
          <div className="card card-compact bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
            <figure>
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk85QwcWcilz2_zcpJOhIOW19DkOke6cItDw&s"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
            <figure>
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtjrg-bChwrLan3q0CD8-ZXhumsuc7-AInw&s"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="card card-compact bg-base-100 w-96 shadow-xl hover:scale-105 duration-200">
            <figure>
              <img
                className="w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzzAC-GCgalcoWMJ4PtjEbgGQfZzthLszLA&s"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div> */}
        {/* </div>
      </div> */}
    </div>
  );
}

export default CartB;
