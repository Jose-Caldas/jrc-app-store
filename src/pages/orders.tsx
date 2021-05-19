import { Flex } from "@chakra-ui/layout";
import { SideBar } from "../components/SideBar";

export default function Orders() {
  return (
    <Flex>
      <SideBar />
      <Flex>
        <h1>Todo: Orders</h1>
      </Flex>
    </Flex>
  );
}
