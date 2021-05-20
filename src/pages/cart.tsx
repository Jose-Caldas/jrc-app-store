import {
  Flex,
  Text,
  Box,
  Table,
  Tr,
  Th,
  Icon,
  Tbody,
  Td,
  Button,
} from "@chakra-ui/react";
import { FiMinusCircle, FiPlusCircle, FiShoppingCart } from "react-icons/fi";
import { CartLink } from "../components/CartLink";
import { SelectQuanty } from "../components/SelectQuanty";
import { SideBar } from "../components/SideBar";

export default function Cart() {
  return (
    <Flex position="relative">
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="22px">
          Cart
        </Text>
        <Box
          width="800px"
          h="430px"
          display="flex"
          flexDirection="column"
          bg="#FFFFFF"
          justifyContent="space-between"
          p="10px"
        >
          <Table colorScheme="purple" bg="#FFFFFF" borderColor="#8886A5">
            <Tbody>
              <Tr width="100%">
                <Td fontSize="24px" fontWeight="600">
                  Shoes
                </Td>
                <Td textAlign="end">
                  <SelectQuanty color="#F97575" icon={FiMinusCircle} />
                </Td>
                <Td textAlign="center">
                  <SelectQuanty color="#577BF9" icon={FiPlusCircle} />
                </Td>
                <Td
                  fontSize="18px"
                  fontWeight="400"
                  color="#8886A5"
                  textAlign="end"
                >
                  $ 42,00
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="24px" fontWeight="600">
                  Shoes
                </Td>
                <Td textAlign="end">
                  <SelectQuanty color="#F97575" icon={FiMinusCircle} />
                </Td>
                <Td textAlign="center">
                  <SelectQuanty color="#577BF9" icon={FiPlusCircle} />
                </Td>
                <Td
                  fontSize="18px"
                  fontWeight="400"
                  color="#8886A5"
                  textAlign="end"
                >
                  $ 42,00
                </Td>
              </Tr>
              <Tr>
                <Td fontSize="24px" fontWeight="600">
                  Shoes
                </Td>
                <Td textAlign="end">
                  <SelectQuanty color="#F97575" icon={FiMinusCircle} />
                </Td>
                <Td textAlign="center">
                  <SelectQuanty color="#577BF9" icon={FiPlusCircle} />
                </Td>
                <Td
                  fontSize="18px"
                  fontWeight="400"
                  color="#8886A5"
                  textAlign="end"
                >
                  $ 42,00
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Flex justify="space-between" px="24px">
            <Text fontSize="24px" fontWeight="600">
              Total
            </Text>
            <Text fontSize="24px" fontWeight="600" pb="22px">
              $126
            </Text>
          </Flex>
        </Box>
        <Flex justify="flex-end" mt="46px">
          <Button type="submit" colorScheme="blue" width="195px">
            Create Order
          </Button>
        </Flex>
      </Flex>
      <CartLink />
    </Flex>
  );
}
