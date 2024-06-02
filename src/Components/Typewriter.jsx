import React, { useState, useEffect } from "react";

const Typewriter = ({ text }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
    // console.log(text);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (currentIndex === text.length) {
  //       setCurrentIndex(0); // Reset the index to start from the beginning
  //       setDisplayedText("");
  //     } else {
  //       setDisplayedText((prevText) => prevText + text[currentIndex]);
  //       setCurrentIndex((prevIndex) => prevIndex + 1);
  //     }
  //   }, 400); // Adjust the interval duration to control the typing speed

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [currentIndex, text]);

  return (
    <div>
      <p className="font-semibold" id="animatedText">
        I'm a <span  className="text-red-600 font-bold">{text}</span>
      </p>
    </div>
  );
};

export default Typewriter;