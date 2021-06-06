import { Flex, Text, Link, Icon } from "@chakra-ui/react";
import { IoWarningOutline } from "react-icons/io5";

export default function LoginError() {
  return (
    <Flex align="center" justify="center" h="70vh">
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
        <Icon as={IoWarningOutline} color="#FFA500" fontSize="80px" mb="20px" />
        <Text fontSize="30px" mb="10px">
          Email ou senha incorretos
        </Text>
        <Flex flexDirection="column" align="center">
          <Link href="/" color="#577BF9" fontSize="20px" fontWeight="bold">
            Voltar e tentar novamente
          </Link>
          <Text>Ou</Text>
          <Link
            href="/registration"
            color="#577BF9"
            fontSize="20px"
            fontWeight="bold"
          >
            Criar nova conta
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
