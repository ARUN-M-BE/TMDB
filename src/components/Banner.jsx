import React, { useState, useEffect } from "react";
import banner1 from "../../public/banner1.jpg";
import banner2 from "../../public/banner2.jpg";
import banner3 from "../../public/banner3.jpg";

function Banner() {
  const banners = [
    { image: banner1, text: "Mission Impossible Dead Reckoning" },
    { image: banner2, text: "Mortal Kombat" },
    { image: banner3, text: "Fast X" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000); // Change banner every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [banners.length]);

  return (
    <div
      className="h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[75vh] bg-cover flex items-end bg-center"
      style={{
        backgroundImage: `url(${banners[currentIndex].image})`,
      }}
    >
      <div className="flex w-[100vw] justify-center z-10 bg-black bg-opacity-50">
        <h1 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-white p-2 ">
          {banners[currentIndex].text}
        </h1>
      </div>
    </div>
  );
}

export default Banner;
