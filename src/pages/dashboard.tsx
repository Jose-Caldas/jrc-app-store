import { Flex, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { CartLink } from "../components/CartLink";
import { SideBar } from "../components/SideBar";

export default function Dashboard() {
  return (
    <Flex>
      <CartLink />
      <SideBar />
      <Flex flex="1" flexDirection="column" mt="131px" p="30px">
        <Text fontSize="40px" fontWeight="600" mb="22px">
          Welcome customer!!
          {name}
        </Text>
        <Stack spacing="6">
          <Flex align="center" color="#8886A5" bg="#FFFFFF" p="10px">
            <Text pb="5px" fontSize="30px">
              👈
            </Text>
            <Text ml="10px">Navegue pelo menu a esquerda</Text>
          </Flex>
        </Stack>
      </Flex>
    </Flex>
  );
}
