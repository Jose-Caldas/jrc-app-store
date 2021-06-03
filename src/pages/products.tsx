import { Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { api } from "./api";

import { ProductItem } from "../components/ProductItem";
import { SideBar } from "../components/SideBar";
import { setCookie } from "nookies";

export type Product = {
  _id?: string;
  name: string;
  price: number;
  total?: number;
};

export async function getProducts(): Promise<Product[]> {
  const response = await api.get("/product");
  // console.log(response.data);
  return response.data["products"];
}

export default function Products() {
  const { data, isLoading, isFetching, error } = useQuery(
    "product",
    getProducts,
    {
      staleTime: 1000 * 5,
    }
  );
  // console.log(data);

  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="">
          Products
          {!isLoading && isFetching && (
            <Spinner color="#8886A5" size="sm" ml="4" />
          )}
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
        ) : error ? (
          <Text mt="5" color="#F97575">
            Falha ao obter os dados
          </Text>
        ) : (
          <Flex wrap="wrap">
            {data.map((product) => {
              return (
                <ProductItem
                  key={product._id}
                  name={product.name}
                  price={product.price}
                />
              );
            })}
          </Flex>
          // <Flex wrap="wrap">
          //   <ProductItem name="Shoes" price={42} />
          // </Flex>
        )}
      </Flex>
    </Flex>
  );
}
