import Image from "next/legacy/image";
import heroPic from "@/assets/images/hero-pic-1.png";
import React, { useState } from "react";
const Hero = () => {
  const [current, setCurrent] = useState(0);
  const imageData = [
    {
      id: 0,
      src: heroPic,
      alt: "hero pic 1",
    },
    {
      id: 1,
      src: heroPic,
      alt: "hero pic 1",
    },
    {
      id: 2,
      src: heroPic,
      alt: "hero pic 1",
    },
    {
      id: 3,
      src: heroPic,
      alt: "hero pic 1",
    },
  ];
  return (
    <section className="hero">
      <div className={`hero__images hero__transform_${current}`}>
        {imageData.map((image) => (
          <div key={image.id} className="hero__images__image">
            <Image src={image.src} alt={image.alt} layout="responsive" />
          </div>
        ))}
      </div>
      <div className="hero__dots">
        {imageData.map((image) => (
          <div
            key={image.id}
            className={`hero__dots__dot ${
              current === image.id && "hero__dots__dot-active"
            }`}
            onClick={() => setCurrent(image.id)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
