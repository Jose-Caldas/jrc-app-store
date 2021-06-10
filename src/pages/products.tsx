import { Flex, Spinner, Text, Button, Link } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { api } from "./api";

import { ProductItem } from "../components/ProductItem";
import { SideBar } from "../components/SideBar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import create from "zustand";

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

// export type Product = {
//   _id?: string;
//   name: string;
//   price: number;
//   total?: number;
// };

// export async function getProducts(): Promise<Product[]> {
//   const response = await api.get("/product");

//   return response.data.products;
// }

export default function Products() {
  const bears = useStore((state) => state.bears);
  console.log(bears);

  const { getProducts } = useContext(AuthContext);

  const { isLoading, error, data, isFetching } = useQuery(
    "product",
    getProducts
  );
  console.log(data);

  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="">
          Products
        </Text>
        {!isLoading && isFetching && (
          <Spinner color="#8886A5" size="sm" ml="4" />
        )}
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
        ) : error ? (
          <Text mt="5" color="#F97575">
            Falha ao obter os dados
          </Text>
        ) : (
          <Flex wrap="wrap">
            {data.map((product) => {
              return (
                <Flex key={product._id} flexDirection="column" justify="center">
                  <ProductItem name={product.name} price={product.price} />

                  <Link href="/cart" _hover={{ border: "none" }}>
                    <Button
                      type="submit"
                      colorScheme="blue"
                      width="267px"
                      isLoading={isLoading}
                      borderTopRadius="none"
                    >
                      Add to cart
                    </Button>
                  </Link>
                </Flex>
              );
            })}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
