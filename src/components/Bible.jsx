import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

import bible from "../bibles/ro_vdc.json";

import "../styles/bible.scss";
const YouVersion = require("@glowstudent/youversion");
console.log(YouVersion.getVerseOfTheDay);

const Bible = () => {
  const lastAccessedBook = localStorage.getItem("last-book");
  const lastAccessedChapter = localStorage.getItem("last-chapter");
  const targetBook = bible.find((book) =>
    book.names.includes(lastAccessedBook)
  );
  const [currentBook, setCurrentBook] = useState(targetBook);
  const [currentChapter, setCurrentChapter] = useState(
    parseInt(lastAccessedChapter)
  );

  useEffect(() => {
    localStorage.setItem("last-book", currentBook.names[1]);
    localStorage.setItem("last-chapter", currentChapter);
  }, [currentBook, currentChapter]);

  // const book = bible.find((b) => b.names.includes("Geneza"));
  const [currentFontSize, setCurrentFontSize] = useState("1.1rem");
  const [currentFontFamily, setCurrentFontFamily] = useState("sans-serif");

  const handleBookChange = (targetBook) => {
    const newBook = bible.find((book) => book.names.includes(targetBook));
    setCurrentBook(newBook);
    setCurrentChapter(0);
  };

  const handleChapterChange = (targetChapter) => {
    setCurrentChapter(targetChapter - 1);
  };

  const handleFontFamilyChange = (e) => {
    const prevFontFamily = document.querySelector(".selected-font-family");
    prevFontFamily.classList.remove("selected-font-family");
    const newFontFamily = e.target;
    newFontFamily.classList.add("selected-font-family");
    setCurrentFontFamily(newFontFamily.id);
  };

  const handleFontSizeChange = (e) => {
    const prevFontSize = document.querySelector(".selected-font-size");
    prevFontSize.classList.remove("selected-font-size");
    const newFontSize = e.target;
    newFontSize.classList.add("selected-font-size");
    setCurrentFontSize(newFontSize.id);
  };

  return (
    <div className="bible">
      <div className="selector-container">
        <div className="bible-controls">
          <FormControl className="flex">
            <label htmlFor="uncontrolled-native">Carte</label>
            <NativeSelect
              inputProps={{
                name: "book",
                id: "uncontrolled-native",
                value: currentBook.names[1],
                onChange: (e) => handleBookChange(e.target.value),
                className: "select",
              }}
              sx={{
                backgroundColor: "#333333",
                padding: "10px",
                margin: "0 !important",
              }}
            >
              {bible?.map((book) => (
                <option value={book.names[1]} key={book.abbrev}>
                  {book.names[1]}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
          <FormControl className="flex">
            <label htmlFor="uncontrolled-native">Capitol</label>
            <NativeSelect
              defaultValue={currentChapter}
              inputProps={{
                name: "chapter",
                id: "uncontrolled-native",
                value: currentChapter + 1,
                onChange: (e) => handleChapterChange(e.target.value),
                className: "select",
              }}
              sx={{
                backgroundColor: "#333333",
                padding: "10px",
                margin: "0 !important",
              }}
            >
              {currentBook?.chapters?.map((chapter, i) => (
                <option value={i + 1} key={i + 1}>
                  {i + 1}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </div>
        <div className="font-controls">
          <div>
            <button
              id="0.95rem"
              className="font-small"
              onClick={(e) => handleFontSizeChange(e)}
            >
              A
            </button>
            <button
              id="1.1rem"
              className="font-medium selected-font-size"
              onClick={(e) => handleFontSizeChange(e)}
            >
              A
            </button>
            <button
              id="1.4rem"
              className="font-large"
              onClick={(e) => handleFontSizeChange(e)}
            >
              A
            </button>
          </div>
          <div>
            <button
              className="selected-font-family"
              onClick={(e) => handleFontFamilyChange(e)}
              id="sans-serif"
            >
              B
            </button>
            <button
              className="sans-font"
              id="sans"
              onClick={(e) => handleFontFamilyChange(e)}
            >
              B
            </button>
          </div>
        </div>
      </div>
      {currentChapter != 0 && (
        <button
          className="prev-button"
          onClick={() => {
            setCurrentChapter((prev) => (prev -= 1));
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          înapoi
        </button>
      )}
      {currentChapter != currentBook?.chapters?.length - 1 && (
        <button
          className="next-button"
          onClick={() => {
            setCurrentChapter((prev) => (prev += 1));
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          înainte
        </button>
      )}
      <div className="bible-read">
        {currentBook?.chapters[currentChapter]?.map((verse, i) => (
          <span key={i}>
            <sup>{i + 1}</sup>
            <span
              style={{
                fontSize: currentFontSize,
                fontFamily: currentFontFamily,
              }}
            >
              {verse}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Bible;
