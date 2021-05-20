import { Flex, Stack, Text } from "@chakra-ui/layout";
import { BoxOrder } from "../components/Form/BoxOrder";
import { CartLink } from "../components/Form/CartLink";
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
          <BoxOrder value="300,00" dated_at="19/05/2021" />
          <BoxOrder value="300,00" dated_at="19/05/2021" />
        </Stack>
      </Flex>
    </Flex>
  );
}
