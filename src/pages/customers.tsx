import { Flex, Text, Stack } from "@chakra-ui/layout";
import { useContext } from "react";
import { OrderItem } from "../components/OrderItem";
import { SideBar } from "../components/SideBar";
import { AuthContext } from "../context/AuthContext";

export default function Customers() {
  const { user } = useContext(AuthContext);

  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="22px">
          Customers
        </Text>
        <Stack spacing="6">
          <OrderItem name={user?.name} email={user?.email} />
          <OrderItem name="Julio" email="julio@gmail.com" />
        </Stack>
      </Flex>
    </Flex>
  );
}
