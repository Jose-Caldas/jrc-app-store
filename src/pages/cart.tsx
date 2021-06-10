import { Flex, Text, Box, Button, Link, Icon } from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { CartLink } from "../components/CartLink";
import { SideBar } from "../components/SideBar";
import { AuthContext } from "../context/AuthContext";
import { useStore } from "./products";

export default function Cart() {
  const bears = useStore((state) => state.bears);

  const increasePopulation = useStore((state) => state.increasePopulation);
  const decreasePopulation = useStore((state) => state.decreasePopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);

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
          <Flex align="center">
            <Text fontSize="20px">Shoes</Text>

            <Flex justify="space-evenly" width="100%" align="center" px="60px">
              <Button onClick={() => decreasePopulation()} bg="transparent">
                <Icon as={FiMinusCircle} color="#F97575" fontSize="20px" />
              </Button>
              {bears}
              <Button onClick={() => increasePopulation()} bg="transparent">
                <Icon as={FiPlusCircle} color="#577BF9" fontSize="20px" />
              </Button>
              <Button onClick={() => removeAllBears()} bg="transparent">
                <Icon as={AiOutlineCloseCircle} color="red" fontSize="20px" />
              </Button>
            </Flex>
            <Text>42</Text>
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
