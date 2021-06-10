import { Box, Text, Flex, Button, Link, Icon } from "@chakra-ui/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { CartLink } from "./CartLink";
import { useStore } from "../pages/productsList";

import { numberFormat } from "../utils/numberFormat";
import { useState } from "react";

export function ProductItem({ name, price }) {
  const increasePopulation = useStore((state) => state.increasePopulation);

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
            <Button bg="transparent">
              <Icon as={FiMinusCircle} color="#F97575" fontSize="20px" />
            </Button>
            <Button onClick={() => increasePopulation()} bg="transparent">
              <Icon as={FiPlusCircle} color="#577BF9" fontSize="20px" />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
