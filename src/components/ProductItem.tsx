import { Box, Text, Flex, Button, Link, Icon } from "@chakra-ui/react";
import { setCookie } from "nookies";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { CartLink } from "./CartLink";

import { useContext } from "react";
import { Product } from "../pages/products";
import { CartContext } from "../context/CartContext";
import { numberFormat } from "../utils/numberFormat";

export function ProductItem({ name, price }: Product) {
  setCookie(undefined, "cart-product", "value", {
    maxAge: 60 * 60 * 24 * 30, //30days
    path: "/cart",
  });
  const { cartItems, setCartItems } = useContext(CartContext);

  return (
    <Flex>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        w="100%"
        width="267px"
        height="245px"
        bg="#FFFFFF"
        borderRadius="9px"
        mr="8"
        mt="8"
      >
        <CartLink />
        <Flex flexDirection="column">
          <Text textAlign="center" fontSize="24px" fontWeight="600" mt="36px">
            {name}
          </Text>
          <Text
            textAlign="center"
            mt="23px"
            color="#8886A5"
            fontWeight="400"
            fontSize="18px"
          >
            {numberFormat.format(price)}
          </Text>
        </Flex>
        <Flex bg="gray.300" height="57px" borderBottomRadius="9px">
          <Flex justify="space-evenly" width="100%" align="center">
            <Button bg="transparent">
              <Icon as={FiMinusCircle} color="#F97575" fontSize="20px" />
            </Button>
            <Button bg="transparent">
              <Icon as={FiPlusCircle} color="#577BF9" fontSize="20px" />
            </Button>
            <Link href="/cart">
              <Button>add to cart</Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
