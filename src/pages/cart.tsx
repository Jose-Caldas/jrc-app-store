import { Flex, Text, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SideBar } from "../components/SideBar";
import { useStore } from "./productsList";
import Link from "next/link";
import { useEffect } from "react";
import nookies from "nookies";

export default function Cart() {
  const { formState } = useForm();

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
        >
          {cart?.length === 0
            ? "Lista Vazia"
            : cart?.map((product) => (
                <Flex key={product._id}>
                  <Text>{product.name}</Text>
                </Flex>
              ))}
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
