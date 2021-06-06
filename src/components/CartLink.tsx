import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex, Link } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";

export function CartLink() {
  return (
    <Flex>
      <Flex
        align="center"
        justify="center"
        bg="#FFFFFF"
        border="1px solid black"
        width="20px"
        h="20px"
        position="absolute"
        top="53px"
        right="80px"
        color="#577BF9"
        fontWeight="bold"
      >
        0
      </Flex>
      <Link
        href="/cart"
        position="absolute"
        top="50px"
        right="50px"
        _hover={{ color: "#577BF9" }}
      >
        <Icon as={FiShoppingCart} fontSize="25px" />
      </Link>
    </Flex>
  );
}
