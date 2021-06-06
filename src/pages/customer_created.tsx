import { Flex, Link, Text } from "@chakra-ui/layout";

export default function CustomerCreated() {
  return (
    <Flex
      flexDirection="column"
      mt="30px"
      align="center"
      justify="center"
      h="100vh"
    >
      <Text fontSize="30px" mb="10px">
        Customer Criado
      </Text>
      <Link href="/" color="#577BF9" fontSize="20px">
        Voltar e fazer Login
      </Link>
    </Flex>
  );
}
