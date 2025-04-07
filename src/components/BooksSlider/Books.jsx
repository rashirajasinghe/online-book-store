import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpeg";
import Book3 from "../../assets/books/book3.jpeg";
import Book4 from "../../assets/books/book4.jpeg";
import Book5 from "../../assets/books/book5.jpeg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "The Lion, the Witch and the Wardrobe",
    rating: 5.0,
    author: "C.S. Lewis",
  },
  {
    id: 2,
    img: Book2,
    title: "New Moon",
    rating: 4.8,
    author: "Stephenie Meyer",
  },
  {
    id: 3,
    img: Book3,
    title: "vampire diaries",
    rating: 4.9,
    author: "L.J. Smith",
  },
  {
    id: 4,
    img: Book4,
    title: "eclipse",
    rating: 4.7,
    author: "Stephenie Meyer",
  },
  {
    id: 5,
    img: Book5,
    title: "midnight sun",
    rating: 4.8,
    author: "Stephenie Meyer",
  },
];

const Books = () => {
  return (
    <>
      <div className="mt-14 mb-12">
        <div className="container">
          {}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
            Explore our curated collection of highly-rated bestsellers that readers can't put down. These fan favorites showcase unforgettable characters, captivating storylines, and worlds that will transport you beyond the ordinary.
            </p>
          </div>

          {}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer  bg-primary text-white py-1 px-5 rounded-md">
                View All Books
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;
