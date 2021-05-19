import { Flex, Text, HStack } from "@chakra-ui/layout";
import { Product } from "../components/Form/Product";
import { SideBar } from "../components/SideBar";

export default function Products() {
  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="22px">
          Products
        </Text>
        <HStack spacing="6" display="flex" wrap="wrap">
          <Product name="Shoes" price="$ 42,00" />
          <Product name="T-shirt" price="$ 32,00" />
          <Product name="Pants" price="$ 27,00" />
          <Product name="Shorts" price="$ 33,00" />
        </HStack>
      </Flex>
    </Flex>
  );
}
