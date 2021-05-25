import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { api } from "./api";

import { ProductItem } from "../components/ProductItem";
import { SideBar } from "../components/SideBar";

type Product = {
  productId: string;
  name: string;
  price: string;
};

interface ProductsResult {
  products: Array<Product>;
}

const getProducts = async () => api.get("/product");

export default function Products() {
  const { data, isLoading } = useQuery("product", getProducts);

  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="">
          Products
        </Text>
        {isLoading ? (
          <Flex
            color="#8886A5"
            justify="space-between"
            align="center"
            mt="20px"
          >
            <Spinner />
            <Text>Loading...</Text>
          </Flex>
        ) : (
          <Flex wrap="wrap">
            {data?.data?.products?.map((product) => (
              <ProductItem
                key={product.productId}
                name={product.name}
                price={product.price}
              />
            ))}
            <ProductItem name="Shoes" price="$42,00" />
            <ProductItem name="T-shirt" price="$50,00" />
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
