import { Box, Text, Flex, Button, Icon, SimpleGrid } from "@chakra-ui/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { CartLink } from "./CartLink";

interface ProductProps {
  name: string;
  price: string;
}

export function Product({ name, price }: ProductProps) {
  return (
    <Flex wrap="wrap">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        width="267px"
        height="245px"
        bg="#FFFFFF"
        borderRadius="9px"
        mr="8"
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
            <Button bg="transparent">
              <Icon as={FiMinusCircle} color="#F97575" fontSize="20px" />
            </Button>
            <Button bg="transparent">
              <Icon as={FiPlusCircle} color="#577BF9" fontSize="20px" />
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
