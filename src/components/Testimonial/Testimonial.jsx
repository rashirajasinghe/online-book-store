import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "I was skeptical at first, but this site has completely changed my reading game. The personalized recommendations are spot on, and I've discovered so many amazing books that I wouldn't have found otherwise. The delivery was quick and the packaging was great. Highly recommend!",
    img: "https://picsum.photos/100/100",
    
  },

  {
    id: 1,
    name: "Jane Smith",
    text: "I can't say enough good things about this site! The selection is vast and the recommendations are tailored to my taste. I've found some hidden gems that I now consider favorites. The customer service is also top-notch. I had a small issue with my order, and they resolved it quickly and professionally.",
    img: "https://picsum.photos/101/101",
    
  },

  {
    id: 1,
    name: "Emily Johnson",
    text: "As a busy professional, I don't have time to sift through endless book lists. This site has made it so easy for me to find books that I love. The recommendations are always spot on, and I've even started gifting subscriptions to my friends. It's a game changer for anyone who loves to read!",
    img: "https://picsum.photos/102/102",
    
  },

  {
    id: 1,
    name: "Michael Brown",
    text: "I was blown away by the quality of the books I received. They were all in pristine condition, and the selection was fantastic. I love that I can get personalized recommendations based on my reading history. It's like having a personal book shopper!",
    img: "https://picsum.photos/103/103",
  },
  
  {
    id: 1,
    name: "Sarah Wilson",
    text: "This site has completely transformed my reading experience. The personalized recommendations are spot on, and I've discovered so many amazing books that I wouldn't have found otherwise. The delivery was quick and the packaging was great. Highly recommend!",
    img: "https://picsum.photos/104/104",
    
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
            Hear from readers who have discovered their next favorite books through our recommendations. Real experiences from our community of book lovers.
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative h-[300px] overflow-y-auto"
                    >
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
