import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cse1 from '../../../../assets/cse1.jpeg';
import eee1 from "../../../../assets/eee1.jpg";
import eee2 from "../../../../assets/eee2.jpeg";
import civil1 from "../../../../assets/civil1.jpg";
import civil2 from "../../../../assets/civil2.jpg";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-5 bg-gray-50">
      <div className="container mx-auto">
        <Slider {...settings}>
          <div className="h-full">
          <div
              className="h-[100vh] rounded-md"
              style={{ backgroundImage: `url(${cse1})` }}
            >
              <h1 className="text-pink-300  text-3xl xl:text-5xl leading-snug font-semibold pt-64 px-8">
                Welcome to way of productive <br />
                <i className="text-purple-600">study </i>
                save your time
              </h1>
            </div>
            
          </div>

          <div className="h-full">
            <div
              className="h-[100vh] rounded-md"
              style={{ backgroundImage: `url(${eee1})` }}
            >
              <h1 className="text-pink-300  text-3xl xl:text-5xl leading-snug font-semibold pt-64 px-8">
                Welcome to way of productive <br />
                <i className="text-purple-600">study </i>
                save your time
              </h1>
            </div>
          </div>

          <div className=" h-full">
          <div
              className="h-[100vh] rounded-md"
              style={{ backgroundImage: `url(${eee2})` }}
            >
              <h1 className="text-pink-300  text-3xl xl:text-5xl leading-snug font-semibold pt-64 px-8">
                Welcome to way of productive <br />
                <i className="text-purple-600">study </i>
                save your time
              </h1>
            </div>
          </div>
          <div className=" h-full">
          <div
              className="h-[100vh]  rounded-md"
              style={{ backgroundImage: `url(${civil1})` }}
            >
              <h1 className="text-pink-300  text-3xl xl:text-5xl leading-snug font-semibold pt-64 px-8">
                Welcome to way of productive <br />
                <i className="text-purple-600">study </i>
                save your time
              </h1>
            </div>
          </div>
          <div className=" h-full">
          <div
              className="h-[100vh] rounded-md"
              style={{ backgroundImage: `url(${civil2})` }}
            >
              <h1 className="text-pink-300  text-3xl xl:text-5xl leading-snug font-semibold pt-64 px-8">
                Welcome to way of productive <br />
                <i className="text-purple-600">study </i>
                save your time
              </h1>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
