import { Flex, Text, Stack } from "@chakra-ui/layout";
import { BoxOrder } from "../components/Form/BoxOrder";
import { SideBar } from "../components/SideBar";

export default function Customers() {
  return (
    <Flex>
      <SideBar />
      <Flex flexDirection="column" mt="131px">
        <Text fontSize="30px" fontWeight="600" mb="22px">
          Customers
        </Text>
        <Stack spacing="6">
          <BoxOrder value="Julio" dated_at="julio@gmail.com" />
          <BoxOrder value="José" dated_at="jose@gmail.com" />
        </Stack>
      </Flex>
    </Flex>
  );
}
