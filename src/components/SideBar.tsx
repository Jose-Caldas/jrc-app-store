import { Box, Icon, Stack, Text, Flex } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import {
  FiPackage,
  FiUsers,
  FiShoppingBag,
  FiShoppingCart,
  FiSkipBack,
} from "react-icons/fi";

import { BiLogOut } from "react-icons/bi";
import { ActiveLink } from "./ActiveLink";

export function SideBar() {
  return (
    <Box
      as="form"
      width="283px"
      height="100vh"
      bg="#FFFFFF"
      mr="74px"
      pl="8"
      fontSize="18px"
      fontWeight="600"
      color="#8886A5"
    >
      {/* <Icon as={FiSkipBack} /> */}
      <Flex alignItems="center" cursor="pointer">
        <Icon as={FiSkipBack} />
        <Link href="/dashboard">
          <Text ml="8px">Home</Text>
        </Link>
      </Flex>

      <Stack spacing="12" alignItems="flex-start" pt="163px">
        <Flex alignItems="center" cursor="pointer">
          <Icon as={FiPackage} />
          <Link href="/productsList">
            <Text ml="16px">Products</Text>
          </Link>
        </Flex>
        <Flex alignItems="center" cursor="pointer">
          <Icon as={FiUsers} />
          <Link href="/customers">
            <Text ml="16px">Customers</Text>
          </Link>
        </Flex>
        <Flex alignItems="center" cursor="pointer">
          <Icon as={FiShoppingBag} />
          <Link href="/orders">
            <Text ml="16px">Orders</Text>
          </Link>
        </Flex>
        <Flex alignItems="center" cursor="pointer">
          <Icon as={FiShoppingCart} />
          <Link href="/cart">
            <Text ml="16px">Cart</Text>
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
}
