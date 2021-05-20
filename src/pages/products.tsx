import { Flex, Text, Stack, SimpleGrid, Box } from "@chakra-ui/layout";
import { ProductItem } from "../components/ProductItem";
import { SideBar } from "../components/SideBar";

export default function Products() {
  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="">
          Products
        </Text>

        <Flex wrap="wrap">
          <ProductItem name="Shoes" price="$ 42,00" />
          <ProductItem name="T-shirt" price="$ 32,00" />
          <ProductItem name="Pants" price="$ 27,00" />
          <ProductItem name="Shorts" price="$ 33,00" />
        </Flex>
      </Flex>
    </Flex>
  );
}
