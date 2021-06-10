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
  removeAllBears: () => set({ bears: 0 }),
  cart: [],
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
}));

export default function ProductsList() {
  const bears = useStore((state) => state.bears);

  const onAddToCart = useStore((state) => state.addToCart);
  console.log(onAddToCart);

  const cart = useStore((state) => state.cart);

  const { getProducts } = useContext(AuthContext);

  const { isLoading, error, data, isFetching } = useQuery(
    "product",
    getProducts
  );

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
                <Flex
                  key={product._id}
                  flexDirection="column"
                  justify="center"
                  m="0 auto"
                >
                  <ProductItem name={product.name} price={product.price} />
                  <button onClick={onAddToCart}>Add to cart</button>
                </Flex>
              );
            })}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
