import {
  Flex,
  VStack,
  Text,
  Heading,
  HStack,
  Tag,
  Button,
  Box,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import Image from "next/legacy/image";
import heroPic from "@/assets/images/hero-pic-1.png";
import React, { useState } from "react";
import styles from "./hero.module.css";
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
    <section className={styles.hero}>
      <div
        className={`${styles.hero__images} ${
          styles[`hero__transform_${current}`]
        }`}
      >
        {imageData.map((image) => (
          <div key={image.id} className={styles.hero__images__image}>
            <Image src={image.src} alt={image.alt} layout="responsive" />
          </div>
        ))}
      </div>
      <div className={styles.hero__dots}>
        {imageData.map((image) => (
          <div
            key={image.id}
            className={`${styles.hero__dots__dot} ${
              current === image.id && styles["hero__dots__dot-active"]
            }`}
            onClick={() => setCurrent(image.id)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
