import { Flex, Text, Stack } from "@chakra-ui/layout";
import { useContext, useEffect } from "react";
import { CustomerItem } from "../components/CustomerItem";
import { OrderItem } from "../components/OrderItem";
import { SideBar } from "../components/SideBar";
import { AuthContext } from "../context/AuthContext";
import { api } from "./api";

export default function Customers() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get("/user").then((response) => console.log(response.data));
  }, []);

  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="22px">
          Customers
        </Text>
        <Stack spacing="6">
          <CustomerItem name={user?.name} email={user?.email} />
          <CustomerItem name={user?.name} email={user?.email} />
        </Stack>
      </Flex>
    </Flex>
  );
}
