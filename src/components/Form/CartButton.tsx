import { Button } from "@chakra-ui/button";
import Icon from "@chakra-ui/icon";
import { FiShoppingCart } from "react-icons/fi";

export function CartButton() {
  return (
    <Button
      position="absolute"
      top="40px"
      right="50px"
      bg="transparent"
      leftIcon={<Icon fontSize="25px" as={FiShoppingCart} />}
      _hover={{ color: "#577BF9" }}
    ></Button>
  );
}
