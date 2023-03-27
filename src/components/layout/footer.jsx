import React from "react";
import Image from "next/Image";

import { Box, Flex, Link, Text, Divider } from "@chakra-ui/react";

import YoutubeIcon from "@/assets/images/socialmedia/youtube.png";
import WhatsappIcon from "@/assets/images/socialmedia/whatsapp.png";
import TwitterIcon from "@/assets/images/socialmedia/Twitter.png";
import TelegramIcon from "@/assets/images/socialmedia/Telegram.png";
import LinkedinIcon from "@/assets/images/socialmedia/linkedin.png";
import InstagramIcon from "@/assets/images/socialmedia/instagram.png";
import AparatIcon from "@/assets/images/socialmedia/aparat.png";
import PaymentLogo from "@/assets/images/PaymentLogo.png";

import LocationIcon from "@/assets/images/location.png";
import CallIcon from "@/assets/images/call.png";

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: "whiteAlpha.300",
    }}
    href={"#"}
    color="white"
  >
    {children}
  </Link>
);

const IconLink = ({ children }) => (
  <Link px={2} py={1} href={"#"}>
    {children}
  </Link>
);

const Footer = () => {
  return (
    <footer>
      <Box
        as="footer"
        bg="#3AAEBB"
        borderTop="1px solid"
        borderColor="whiteAlpha.300"
      >
        {/* Container with 50% width in center */}
        <div
          style={{
            width: "60vw",
            margin: "0 auto",
            padding: "1vw",
          }}
        >
          <Flex direction="row" justify="space-between" align="center">
            <Box p="7">
              {/* Heading "معرفی تیم‎ها"
                  after that, we have two columns with eight links in each column */}
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="white"
                textAlign="center"
                fontFamily={"Vazirmatn-Regular"}
              >
                معرفی تیم‎ها
              </Text>
              <Flex
                direction="row"
                justify="space-between"
                align="center"
                gap={12}
              >
                <Flex direction="column">
                  <NavLink>بازسازی</NavLink>
                  <NavLink>طراحی</NavLink>
                  <NavLink>پشتیبانی</NavLink>
                  <NavLink>کارناوال شادی</NavLink>
                </Flex>
                <Flex direction="column">
                  <NavLink>سرزمین آفتاب</NavLink>
                  <NavLink>پویش</NavLink>
                  <NavLink>مستند</NavLink>
                  <NavLink>آموزش</NavLink>
                </Flex>
              </Flex>
            </Box>

            <Box p="5">
              {/* Google Map with company location */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.5167629636476!2d51.44108551551574!3d35.73810133445774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0250c928f8d9%3A0x4c88d8c2a938935a!2skoodakancharity!5e0!3m2!1sen!2s!4v1679211434516!5m2!1sen!2s"
                Width="400"
                // height="450"
                style={{ border: 0, borderRadius: "10px" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Flex>
          <Flex direction="row" align="center" justify="right" gap={3}>
            <Text color="white" fontFamily={"Vazirmatn-Regular"}>
              ما را در شبکه‎های اجتماعی دنبال کنید
            </Text>

            <div
              style={{
                display: "flex",
              }}
            >
              <IconLink>
                <Image src={TelegramIcon} alt="Telegram" />
              </IconLink>
              <IconLink>
                <Image src={WhatsappIcon} alt="Whatsapp" />
              </IconLink>
              <IconLink>
                <Image src={AparatIcon} alt="Aparat" />
              </IconLink>
              <IconLink>
                <Image src={YoutubeIcon} alt="Youtube" />
              </IconLink>
              <IconLink>
                <Image src={LinkedinIcon} alt="Linkedin" />
              </IconLink>
              <IconLink>
                <Image src={TwitterIcon} alt="Twitter" />
              </IconLink>
              <IconLink>
                <Image src={InstagramIcon} alt="Instagram" />
              </IconLink>
            </div>
          </Flex>

          <div>
            <br />
            <Divider borderColor="white" border="1px" color="white" />
          </div>

          <Flex
            direction="row"
            justify="space-between"
            align="center"
            marginTop={"5"}
          >
            <Box>
              <Flex
                direction="row"
                justify="space-between"
                align="center"
                gap={2}
              >
                <Image src={LocationIcon} alt="LocationIcon" />
                <Text color="white" fontFamily={"Vazirmatn-Regular"}>
                  تهران، سیدخندان، سهروردی شمالی، بعد از پالیزی، پایین‌تر از
                  کوچه مسجد، جنب گل فروشی آیریس، درب قهوه ای، زنگ اول
                </Text>
              </Flex>
              <Flex direction="row" justify="start" align="center" gap={2}>
                <Image src={CallIcon} alt="CallIcon" />
                <Text color="white" fontFamily={"Vazirmatn-Regular"}>
                  ۰۲۱-۴۷۸۰
                </Text>
              </Flex>
            </Box>
            <Flex direction="row" justify="start" align="center" gap={2}>
              <Image src={PaymentLogo} alt="PaymentLogo" />
              <Image src={PaymentLogo} alt="PaymentLogo" />
            </Flex>
          </Flex>
        </div>
      </Box>
    </footer>
  );
};

export default Footer;
