import { Flex, Text, Stack } from "@chakra-ui/react";
import React from "react";
import { CartLink } from "../components/CartLink";
import { SideBar } from "../components/SideBar";

export default function Dashboard() {
  return (
    <Flex>
      <CartLink />
      <SideBar />
      <Flex flex="1" flexDirection="column" mt="131px" bg="#FFFFFF" p="30px">
        <Text fontSize="40px" fontWeight="600" mb="22px">
          Welcome!!!
        </Text>
        <Stack spacing="6">
          <Text color="#8886A5">Customer:</Text>
        </Stack>
      </Flex>
    </Flex>
  );
}
