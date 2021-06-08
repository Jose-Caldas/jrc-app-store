import { Flex, Text, Box, Button, Link } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { CartLink } from "../components/CartLink";
import { SideBar } from "../components/SideBar";

export default function Cart() {
  const { formState } = useForm();

  return (
    <Flex position="relative">
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
          <Text
            id="Product-list"
            p="10px"
            borderBottom="1px"
            borderColor="gray.200"
          >
            Lista de produtos vazia
          </Text>
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
