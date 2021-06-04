import { Flex, Text, Stack } from "@chakra-ui/layout";
import { useContext, useEffect } from "react";
import { CustomerItem } from "../components/CustomerItem";
import { SideBar } from "../components/SideBar";
import { AuthContext } from "../context/AuthContext";
import { api } from "./api";
import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/spinner";

export type Users = {
  _id?: string;
  name: string;
  email: string;
  wasVerified: boolean;
};

export async function getCustomers(): Promise<Users[]> {
  const response = await api.get("/user");
  console.log(response.data["users"]);
  return response.data["users"];
}

export default function Customers() {
  const { data, isLoading, isFetching, error } = useQuery(
    "user",
    getCustomers,
    {
      staleTime: 1000 * 5,
    }
  );

  const { user } = useContext(AuthContext);
  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="">
          Customers
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
            {data.map((user) => {
              return (
                <CustomerItem
                  key={user._id}
                  name={user.name}
                  email={user.email}
                  wasVerified={true}
                />
              );
            })}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
