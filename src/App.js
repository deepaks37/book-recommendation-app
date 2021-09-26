import react, { useState } from "react";
import "./styles.css";

// DB
const allBooksList = {
  Javascript: [
    {
      Name: "Javascript: the good parts",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX381_BO1,204,203,200_.jpg",
      description:
        "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast."
    },
    {
      Name: "Eloquent Javascript",
      Image: "https://eloquentjavascript.net/img/cover.jpg",
      description:
        "Eloquent JavaScript is an excellent book for web developers. In addition to discovering the inner workings of JavaScript, you'll also build five projects. Node. js is also included."
    }
  ],
  Selfhelp: [
    {
      Name: "The compound effect",
      Image:
        "https://images-na.ssl-images-amazon.com/images/I/51Bz60iDotL._SX359_BO1,204,203,200_.jpg",
      description:
        "The Compound Effect is about how small actions, executed consistently, can lead to hugely successful results, both in business and in life. Darren wrote this book as a guide on how to take ownership of your own life through the small decisions you make on a daily basis. "
    },
    {
      Name: "Atomic Habits",
      Image:
        "https://kbimages1-a.akamaihd.net/76839081-c031-4588-863a-e760b6b0b323/1200/1200/False/atomic-habits-tiny-changes-remarkable-results.jpg",
      description:
        " Atomic Habits is the most comprehensive and practical guide on how to create good habits, break bad ones, and get 1 percent better every day. ... Bad habits repeat themselves not because you don't want to change but because you have the wrong system for change."
    }
  ],
  Novels: [
    {
      Name: "The vinchi code",
      Image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1579621267l/968.jpg",
      description:
        "The Da Vinci Code follows symbologist Robert Langdon and cryptologist Sophie Neveu after a murder in the Louvre Museum in Paris causes them to become involved in a battle between the Priory of Sion and Opus Dei over the possibility of Jesus Christ and Mary Magdalene having had a child together."
    },
    {
      Name: "The Alchemist",
      Image: "https://images-na.ssl-images-amazon.com/images/I/51NRkX2bPbL.jpg",
      description:
        "The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho that was first published in 1988. ... An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there."
    }
  ]
};

var genreNames = Object.keys(allBooksList);

export default function App() {
  var [bookList, setBookList] = useState(allBooksList.Javascript);

  function genreClickHandler(genre) {
    var books = allBooksList[genre];
    setBookList(books);
  }

  function getBookList(books) {
    var title = books.Name;
    var imageUrl = books.Image;
    var description = books.description;

    var listCreation = (
      <li>
        <div className="bookList-container">
          <div>
            <img alt="poster" src={imageUrl} />
          </div>
          <div>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        </div>
      </li>
    );
    return listCreation;
  }
  return (
    <div>
      <h1>My favorite books</h1>
      <div className="container">
        {genreNames.map((genre) => {
          return (
            <button
              key={genre}
              className="btn"
              onClick={() => genreClickHandler(genre)}
            >
              {genre}
            </button>
          );
        })}
      </div>
      <ul>
        {bookList.map((books) => {
          return getBookList(books);
        })}
      </ul>
    </div>
  );
}
