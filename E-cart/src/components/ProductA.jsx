import React from "react";
import list from "../../public/List.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Card from "./Card";

function ProductA() {
  const filterdata = list.filter((data) => data.category === "Latest");
  //   console.log(list);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-slate-200  dark:bg-slate-900 max-w-screen-2xl mx-auto container  md:px-20 px-4 py-8 mt-20 ">
        <div className="text-black dark:text-slate-300">
          <h1 className="font-bold text-4xl">Our Laptop</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            aut et, dolorum commodi sunt quaerat placeat vitae ab? Quod, eius!
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterdata.map((item) => (
              <Card item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default ProductA;
