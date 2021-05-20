import { Box, Text, Flex } from "@chakra-ui/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { CartLink } from "./CartLink";
import { SelectQuanty } from "./SelectQuanty";

interface ProductProps {
  name: string;
  price: string;
}

export function ProductItem({ name, price }: ProductProps) {
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
            {price}
          </Text>
        </Flex>
        <Flex bg="gray.300" height="57px" borderBottomRadius="9px">
          <Flex justify="space-evenly" width="100%" align="center">
            <SelectQuanty color="#F97575" icon={FiMinusCircle} />
            <SelectQuanty color="#577BF9" icon={FiPlusCircle} />
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
