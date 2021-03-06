import { Box, Text, Flex, Button, Icon } from "@chakra-ui/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { useStore } from "../pages/productsList";

import { numberFormat } from "../utils/numberFormat";

export function ProductItem({ name, price, _id }) {
  const bears = useStore((state) => state.bears);
  const increasePopulation = useStore((state) => state.increasePopulation);
  const onRemoveToCart = useStore((state) => state.removeFromCart);

  return (
    <Flex>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        w="100%"
        width="267px"
        height="200px"
        bg="#FFFFFF"
        borderRadius="9px"
        mr="8"
        mt="8"
      >
        <Flex flexDirection="column">
          <Text textAlign="center" fontSize="24px" fontWeight="600" mt="20px">
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
        <Flex bg="gray.300" height="50px">
          <Flex justify="space-evenly" width="100%" align="center">
            <Button bg="transparent" onClick={() => onRemoveToCart(_id)}>
              <Icon as={FiMinusCircle} color="#F97575" fontSize="20px" />
            </Button>
            <Button onClick={() => increasePopulation()} bg="transparent">
              <Icon as={FiPlusCircle} color="#577BF9" fontSize="20px" />
            </Button>
            {bears}
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
