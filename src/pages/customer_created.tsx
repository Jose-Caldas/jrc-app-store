import { Flex, Link, Text, Icon, Box } from "@chakra-ui/react";
import { FiCheckCircle } from "react-icons/fi";

export default function CustomerCreated() {
  return (
    <Flex align="center" justify="center" h="50vh">
      <Flex
        bg="white"
        flexDirection="column"
        mt="30px"
        align="center"
        justify="center"
        px="70px"
        py="50px"
        borderRadius="8px"
        boxShadow="xl"
      >
        <Icon as={FiCheckCircle} color="#48996c" fontSize="80px" mb="20px" />
        <Text fontSize="30px" mb="10px">
          Customer Criado
        </Text>
        <Link href="/" color="#577BF9" fontSize="20px">
          Fazer Login
        </Link>
      </Flex>
    </Flex>
  );
}
