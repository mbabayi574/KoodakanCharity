import React from "react";
import Image from "next/legacy/image";
import logo from "@/assets/images/logo.png";
import {
  HStack,
  Box,
  Flex,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
const Links = [
  "درباره ما",
  "راه های کمک",
  "تیم ها",
  "کمپین ها",
  "نمایندگی ها",
  "وبلاگ",
  "تماس به ما",
];
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);
const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <header>
      <Box px={"8"}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Image src={logo} alt="logo" layout="intrinsic" />
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"} gap={"8"}>
            <InputGroup width={"48"}>
              <InputLeftElement
                pointerEvents="none"
                // eslint-disable-next-line react/no-children-prop
                children={<SearchIcon color="black" />}
              />
              <Input type="text" placeholder="جست و جو ..." border={"hidden"} />
            </InputGroup>
            <Button colorScheme="teal" size="md" px={8}>
              ورود به خیریه
            </Button>
          </Flex>
        </Flex>
      </Box>
      <hr />
    </header>
  );
};

export default Header;
