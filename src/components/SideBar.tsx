import { Box, Icon, Stack, Text, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { FiPackage, FiUsers, FiShoppingBag } from "react-icons/fi";

export function SideBar() {
  return (
    <Box
      as="aside"
      width="283px"
      height="100vh"
      bg="#FFFFFF"
      mr="74px"
      pl="8"
      fontSize="18px"
      fontWeight="600"
      color="#8886A5"
    >
      <Stack spacing="12" alignItems="flex-start" pt="163px">
        <Flex alignItems="center">
          <Link href="/products" display="flex" alignItems="center">
            <Icon as={FiPackage} />
            <Text ml="16px">Products</Text>
          </Link>
        </Flex>
        <Flex alignItems="center">
          <Link href="/customers" display="flex" alignItems="center">
            <Icon as={FiUsers} />
            <Text ml="16px">Customers</Text>
          </Link>
        </Flex>
        <Flex alignItems="center">
          <Link href="/orders" display="flex" alignItems="center">
            <Icon as={FiShoppingBag} />
            <Text ml="16px">Orders</Text>
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
}
