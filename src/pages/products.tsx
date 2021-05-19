import { Flex } from "@chakra-ui/layout";
import { SideBar } from "../components/SideBar";

export default function Products() {
  return (
    <Flex>
      <SideBar />
      <Flex>
        <h1>Todo: Products</h1>
      </Flex>
    </Flex>
  );
}
