import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { ProductItem } from "../components/ProductItem";
import { SideBar } from "../components/SideBar";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import create from "zustand";
import { setCookie } from "nookies";

// pegar o valor inicial dos cookies

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  cart: [],
  recoverFromLocalStorage: (items) => set(() => ({ cart: items })),

  addToCart: (item) =>
    set((state) => {
      setCookie(
        undefined,
        "cart",
        JSON.stringify({ cart: [...state.cart, item] }),
        {
          maxAge: 60 * 60 * 24 * 30, //30days
          path: "/",
        }
      );

      return { cart: [...state.cart, item] };
    }),
  removeFromCart: (id) => {
    return set((state) => {
      const remove = state.cart.filter((item) => item._id !== id);

      return { cart: remove };
    });
  },
}));

export default function ProductsList() {
  const bears = useStore((state) => state.bears);

  const onAddToCart = useStore((state) => state.addToCart);

  const { getProducts } = useContext(AuthContext);

  const cart = useStore((state) => state.data);

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
                  align="center"
                >
                  <ProductItem
                    _id={product._id}
                    name={product.name}
                    price={product.price}
                  />
                  <button onClick={() => onAddToCart(product)}>
                    Add to cart
                  </button>
                </Flex>
              );
            })}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
