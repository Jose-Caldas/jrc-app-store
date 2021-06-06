import { Flex, Text, Link } from "@chakra-ui/react";

export default function LoginError() {
  return (
    <Flex
      flexDirection="column"
      mt="30px"
      align="center"
      justify="center"
      h="100vh"
    >
      <Text fontSize="30px" mb="10px">
        Email ou senha incorretos
      </Text>
      <Link href="/" color="#577BF9" fontSize="20px">
        Voltar e tentar novamente
      </Link>
      <Link href="/registration" color="#577BF9" fontSize="20px">
        Criar nova conta
      </Link>
    </Flex>
  );
}
