import { Flex } from "@chakra-ui/layout";
import { SideBar } from "../components/SideBar";

export default function Customers() {
  return (
    <Flex>
      <SideBar />
      <Flex>
        <h1>Todo: Customers</h1>
      </Flex>
    </Flex>
  );
}
