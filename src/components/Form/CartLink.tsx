import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { Link } from "@chakra-ui/layout";
import { FiShoppingCart } from "react-icons/fi";

export function CartLink() {
  return (
    <Link
      href="/cart"
      position="absolute"
      top="50px"
      right="50px"
      _hover={{ color: "#577BF9" }}
    >
      <Icon as={FiShoppingCart} fontSize="25px" />
    </Link>
  );
}
