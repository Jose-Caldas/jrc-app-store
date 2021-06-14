import {
  Flex,
  Text,
  Box,
  Button,
  Icon,
  HStack,
  Grid,
  GridItem,
  Table,
  Thead,
  Th,
  Tr,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SideBar } from "../components/SideBar";
import { useStore } from "./productsList";
import Link from "next/link";
import { useEffect } from "react";
import nookies from "nookies";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { numberFormat } from "../utils/numberFormat";

export default function Cart() {
  const { formState } = useForm();

  const onRemoveToCart = useStore((state) => state.removeFromCart);
  const onAddToCart = useStore((state) => state.addToCart);

  const cart = useStore((state) => state.cart);
  const recoverFromLocalStorage = useStore(
    (state) => state.recoverFromLocalStorage
  );

  // Set o cookie em forma serializavel
  // Pegar o cookie e voltar para o tipo primitivo

  useEffect(() => {
    try {
      const products = nookies.get()?.cart;
      console.log(products);

      return recoverFromLocalStorage(JSON.parse(products)?.cart);
    } catch (e) {
      console.log(e);
      return [];
    }
  }, []);

  // const total = cart.reduce((acc, price) => acc + price);
  // console.log(total);

  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="22px">
          Cart
        </Text>
        <Box
          width="800px"
          display="flex"
          flexDirection="column"
          bg="#FFFFFF"
          justifyContent="space-between"
          p="20px"
          boxShadow="lg"
          borderRadius="8px"
        >
          <Table>
            <Thead>
              <Tr color="white" bg="#8886A5">
                <Th color="white">Item</Th>
                <Th textAlign="center" color="white">
                  Remove
                </Th>
                <Th textAlign="center" color="white">
                  Add
                </Th>
                <Th textAlign="center" color="white">
                  Quantity
                </Th>
                <Th textAlign="center" color="white">
                  Total
                </Th>
              </Tr>
            </Thead>
            {cart?.length === 0 ? (
              <Text mt="30px">Lista vazia</Text>
            ) : (
              cart.map((product) => (
                <Tbody color="#8886A5">
                  <Tr key={product._id}>
                    <Td w="290px">{product.name}</Td>
                    <Td textAlign="center">
                      <Button
                        bg="transparent"
                        onClick={() => onRemoveToCart(product._id)}
                      >
                        <Icon
                          as={FiMinusCircle}
                          color="#F97575"
                          fontSize="20px"
                        />
                      </Button>
                    </Td>
                    <Td textAlign="center">
                      <Button
                        onClick={() => onAddToCart(product)}
                        bg="transparent"
                      >
                        <Icon
                          as={FiPlusCircle}
                          color="#577BF9"
                          fontSize="20px"
                        />
                      </Button>
                    </Td>
                    <Td textAlign="center">
                      <Text>0</Text>
                    </Td>
                    <Td textAlign="center" color="#8886A5">
                      <Text>{numberFormat.format(product.price)}</Text>
                    </Td>
                  </Tr>
                </Tbody>
              ))
            )}
          </Table>

          <Flex justify="space-between" fontSize="30px" mt="30px">
            <Text>Total</Text>
            <Text>{numberFormat.format(0)}</Text>
          </Flex>
        </Box>
        <Flex justify="flex-end" mt="46px">
          <Link href="/orders">
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
    </Flex>
  );
}
