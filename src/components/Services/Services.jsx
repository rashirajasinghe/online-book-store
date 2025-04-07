import React from "react";
import Img1 from "../../assets/books/book2.jpeg";
import Img2 from "../../assets/books/book1.jpg";
import Img3 from "../../assets/books/book3.jpeg";
import { FaStar } from "react-icons/fa";

const ServicesData = [
  {
    id: 2,
    img: Img2,
    title: "The Lion, the Witch and the Wardrobe",
    description:
      "this is a story about four children who are transported to the magical land of Narnia, where they encounter talking animals, witches, and epic battles between good and evil.",
  },
  {
    id: 1,
    img: Img1,
    title: "New Moon",
    description:
      "the second book in the Twilight series, follows Bella Swan as she navigates her feelings for Edward Cullen and her friendship with Jacob Black, a werewolf.",
  },
  {
    id: 3,
    img: Img3,
    title: "Vampire Diaries",
    description:
      "a supernatural romance series that follows the lives of Elena Gilbert and the Salvatore brothers, Stefan and Damon, as they navigate love, loss, and the dangers of being a vampire.",}
];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary ">
              Trending Books
            </p>
            <h1 className="text-3xl font-bold">Best Books</h1>
            <p className="text-xs text-gray-400">
              Discover the best books of all time, from classics to contemporary
              bestsellers. Explore our curated list of must-read titles that
              will inspire, entertain, and broaden your horizons.
              Whether you're looking for fiction, non-fiction, or self-help,
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="zoom-in"
                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[100px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
