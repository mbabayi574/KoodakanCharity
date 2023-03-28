import { Flex, Circle } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import TitleBox from "../shared/title-box";
import Image from "next/legacy/image";
import lohImage from "@/assets/images/logo.png";
import digikala from "@/assets/images/company/digikala.png";
import burgerland from "@/assets/images/company/burger-land.png";
import rozhine from "@/assets/images/company/rozhine.png";
import { useState } from "react";
const Slider = ({ images }) => {
  const [curSlide, setCurSlide] = useState(0);
  const nextPageHandler = () => {
    if (curSlide > Math.floor(images.length / 2) - 1) {
      setCurSlide(0);
    } else {
      setCurSlide(curSlide + 1);
    }
  };
  const lastPageHandler = () => {
    if (curSlide < 1) {
      setCurSlide(Math.floor(images.length / 2));
    } else {
      setCurSlide(curSlide - 1);
    }
  };
  return (
    <Flex
      className="supporter-slider"
      justifyContent={"space-between"}
      alignItems="center"
    >
      <Circle
        size="48px"
        bg="white"
        color="primary"
        onClick={nextPageHandler}
        cursor="pointer"
      >
        <ChevronRightIcon w={8} h={8} />
      </Circle>
      <div className="supporter-slider__images">
        {images.map((image) => (
          <>
            <div
              key={image.id}
              className="supporter-slider__images__image"
              style={{ transform: `translateX(-${curSlide * 110}%)` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="intrinsic"
                // objectFit="cover"
              />
            </div>
          </>
        ))}
      </div>
      <Circle
        size="48px"
        bg="white"
        color="primary"
        onClick={lastPageHandler}
        cursor="pointer"
      >
        <ChevronLeftIcon w={8} h={8} />
      </Circle>
    </Flex>
  );
};
const Supporter = () => {
  const lohImagesData = [
    { id: 0, src: lohImage, alt: "loh" },
    { id: 1, src: lohImage, alt: "loh" },
    { id: 2, src: lohImage, alt: "loh" },
    { id: 3, src: lohImage, alt: "loh" },
    { id: 4, src: lohImage, alt: "loh" },
    { id: 45, src: lohImage, alt: "loh" },
  ];
  const companyImagesData = [
    { id: 0, src: digikala, alt: "loh" },
    { id: 1, src: burgerland, alt: "loh" },
    { id: 2, src: rozhine, alt: "loh" },
    { id: 3, src: digikala, alt: "loh" },
    { id: 4, src: burgerland, alt: "loh" },
    { id: 45, src: rozhine, alt: "loh" },
  ];
  return (
    <Flex
      justifyContent={"space-between"}
      paddingX="56px"
      alignItems={"center"}
    >
      <Flex
        direction={"column"}
        flex="0 0 40%"
        gap="56px"
        alignItems={"center"}
      >
        <TitleBox text="لوح های کودکان فرشته اند" />
        <Slider images={lohImagesData} />
      </Flex>
      <div className="supporter-seprator"></div>
      <Flex
        direction={"column"}
        flex="0 0 40%"
        gap="56px"
        alignItems={"center"}
      >
        <TitleBox text="حامیان ما" />
        <Slider images={companyImagesData} />
      </Flex>
    </Flex>
  );
};

export default Supporter;
