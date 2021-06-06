import {
  Flex,
  Text,
  Box,
  Table,
  Tr,
  Tbody,
  Td,
  Button,
  Link,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { CartLink } from "../components/CartLink";
import { SelectQuanty } from "../components/SelectQuanty";
import { SideBar } from "../components/SideBar";
import { CartContext } from "../context/CartContext";
import { Product } from "./products";

export default function Cart({ name, price, total }: Product) {
  const { formState } = useForm();

  const { cartItems } = useContext(CartContext);

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
                  {name}
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
                  {42}
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Flex justify="space-between" px="24px">
            <Text fontSize="24px" fontWeight="600">
              Total
            </Text>
            <Text fontSize="24px" fontWeight="600" pb="22px">
              {total}
            </Text>
          </Flex>
        </Box>
        <Flex justify="flex-end" mt="46px">
          <Link href="/orders" _hover={{ border: "none" }}>
            <Button
              type="submit"
              colorScheme="blue"
              width="195px"
              isLoading={formState.isSubmitting}
            >
              Create Order
            </Button>
          </Link>
        </Flex>
      </Flex>
      <CartLink />
    </Flex>
  );
}
