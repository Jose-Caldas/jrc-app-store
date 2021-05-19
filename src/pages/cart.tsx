import { Flex, Text, Box, Table, Tr, Th, Icon, Tbody } from "@chakra-ui/react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { SideBar } from "../components/SideBar";

export default function Cart() {
  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="22px">
          Cart
        </Text>
        <Box flex="1" width="800px">
          <Table colorScheme="purple" bg="#FFFFFF" borderColor="#8886A5">
            <Tbody>
              <Tr>
                <Th>Shoes</Th>
                <Th>
                  <Icon as={FiMinusCircle} color="#F97575" fontSize="20px" />
                </Th>
                <Th>
                  <Icon as={FiPlusCircle} color="#577BF9" fontSize="20px" />
                </Th>
                <Th>$ 42,00</Th>
              </Tr>
              <Tr>
                <Th>Shoes</Th>
                <Th>
                  <Icon as={FiMinusCircle} color="#F97575" fontSize="20px" />
                </Th>
                <Th>
                  <Icon as={FiPlusCircle} color="#577BF9" fontSize="20px" />
                </Th>
                <Th>$ 42,00</Th>
              </Tr>
              <Tr>
                <Th>Shoes</Th>
                <Th>
                  <Icon as={FiMinusCircle} color="#F97575" fontSize="20px" />
                </Th>
                <Th>
                  <Icon as={FiPlusCircle} color="#577BF9" fontSize="20px" />
                </Th>
                <Th>$ 42,00</Th>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Flex>
  );
}
