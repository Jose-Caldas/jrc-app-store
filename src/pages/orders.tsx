import { Flex, Stack, Text } from "@chakra-ui/layout";
import { OrderItem } from "../components/OrderItem";
import { CartLink } from "../components/CartLink";
import { SideBar } from "../components/SideBar";

export default function Orders() {
  return (
    <Flex>
      <CartLink />
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="22px">
          Orders
        </Text>
        <Stack spacing="6">
          <OrderItem value="300,00" dated_at="19/05/2021" />
          <OrderItem value="300,00" dated_at="19/05/2021" />
        </Stack>
      </Flex>
    </Flex>
  );
}
