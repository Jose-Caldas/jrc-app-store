import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Flex, Link } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useRouter } from "next/router";

export function CartLink() {
  const router = useRouter();
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
      <button onClick={() => router.push("/cart")}>
        <Icon as={FiShoppingCart} fontSize="25px" />
      </button>
    </Flex>
  );
}
