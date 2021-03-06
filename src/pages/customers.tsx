import { Flex, Text, Stack } from "@chakra-ui/layout";
import { useContext, useEffect } from "react";
import { CustomerItem } from "../components/CustomerItem";
import { SideBar } from "../components/SideBar";
import { AuthContext } from "../context/AuthContext";
import { api } from "./api";
import { useQuery } from "react-query";
import { Spinner } from "@chakra-ui/spinner";

export interface User {
  isVisible: boolean;
  isActive: boolean;
  _id: string;
  email: Email;
  name: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
}

export interface Email {
  email: string;
  name: string;
}

export async function getCustomers(): Promise<User[]> {
  const response = await api.get("/user");

  return response.data.users;
}

export default function Customers() {
  const { data, isLoading, isFetching, error } = useQuery(
    "user",
    getCustomers,
    {
      staleTime: 1000 * 5,
    }
  );

  return (
    <Flex flex="1" w="100vw">
      <SideBar />
      <Flex flexDirection="column" mt="50px" w="100%" p="30">
        <Text fontSize="30px" fontWeight="600" mb="30px">
          Customers
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
          <Stack spacing="4">
            {data?.map((user) => {
              return (
                <CustomerItem
                  key={user._id}
                  name={user.name}
                  email={user.email.email}
                />
              );
            })}
          </Stack>
        )}
      </Flex>
    </Flex>
  );
}

// Como objetos funcionam
// Ler a documentação da API, quais parametros sao necessarios, e o que e retornado da requisição
// caso a API nao prover os types, entrar no transform.tools e gerar de acordo com o payload
// isso vai ajudar a acessar as propriedades do objeto
