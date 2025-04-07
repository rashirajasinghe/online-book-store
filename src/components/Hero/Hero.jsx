import React from "react";
import Book1 from "../../assets/books/book2.jpeg";
import Book2 from "../../assets/books/book1.jpg";
import Book3 from "../../assets/books/book3.jpeg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "New Moon",
    author: "Stephenie Meyer",
    description:
      "The second book in the Twilight saga follows Bella Swan after Edward Cullen leaves her to protect her from the dangers of the vampire world. Devastated by his departure, Bella finds comfort in her friendship with Jacob Black, who turns out to be a werewolf. As Bella navigates her grief, she discovers her reckless behavior can conjure visions of Edward. When Alice Cullen returns with news that Edward believes Bella is dead and plans to provoke the Volturi vampire royalty to kill him, Bella races to Italy to save him. The book explores themes of loss, depression, friendship, and the lengths people will go to for love.",
  },
  {
    id: 2,
    img: Book2,
    title: "The Lion, the Witch and the Wardrobe",
    author: "C.S. Lewis",
    description:
      "This is the first published book in The Chronicles of Narnia series. It tells the story of four siblings Peter, Susan, Edmund, and Lucy who are evacuated from London during World War II. While staying in an old professor's house, they discover a magical wardrobe that serves as a portal to Narnia, a land of talking animals and mythical creatures. They find Narnia under the tyrannical rule of the White Witch, who has cast the land into an eternal winter. The children, alongside the majestic lion Aslan (the true king of Narnia), work to overthrow the Witch. The book is an allegorical tale with Christian themes of sacrifice, redemption, and good triumphing over evil.",
  },
  {
    id: 3,
    img: Book3,
    title: "Vampire Diaries",
    author: "L.J. Smith",
    description:
      "The Awakening and The Struggle are the first two books in the Vampire Diaries series. They center on Elena Gilbert, a popular high school student in the town of Fell's Church who finds herself torn between two vampire brothers: Stefan Salvatore, who is noble and fights his vampire nature, and his dangerous, seductive brother Damon. As Elena becomes involved with Stefan, she becomes entangled in the supernatural world and the ancient rivalry between the brothers. The books explore themes of love triangles, supernatural powers, small-town secrets, and the struggle between good and evil within oneself.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  const [imageId, setImageId] = React.useState(Book1);
  const [title, setTitle] = React.useState("New Moon");
  const [author, setAuthor] = React.useState("Stephenie Meyer");
  const [description, setDescription] = React.useState(ImageList[0].description);

  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };

  return (
    <>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200"
        style={bgImage}
      >
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {}
            <div
              data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1"
            >
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
              >
                {title}
                <p className="bg-clip-text text-transparent bg-gradient-to-b from-primary text-right text-sm to-secondary">
                  by {author}
                </p>{" "}
              </h1>
              <p
                data-aos="slide-up"
                data-aos-duration="500"
                data-aos-delay="100"
                className="text-sm"
              >
                {description}
              </p>
              <div>
                <button
                  onClick={handleOrderPopup}
                  className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                >
                  Order Now
                </button>
              </div>
            </div>
            {}
            <div className="min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="book cover"
                  className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 object-contain mx-auto"
                />
              </div>
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute -bottom-[40px] lg:-right-1 bg-white rounded-full">
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3
                      );
                      setTitle(item.title);
                      setAuthor(item.author);
                      setDescription(item.description);
                    }}
                    alt={`${item.title} cover`}
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;