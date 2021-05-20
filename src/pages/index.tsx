import { Button, Flex, Link, Stack, Text } from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

export default function SignIn() {
  return (
    <Flex
      align="center"
      justify="center"
      width="100vw"
      height="100vh"
      bg="#FFFFFF"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth="379px"
        flexDirection="column"
        p="8"
      >
        <Text mb="70px" textAlign="center" fontSize="30px">
          Login
        </Text>
        <Stack spacing="4">
          <Input name="email" type="email" label="E-mail" />
          <Input name="password" type="password" label="Password" />
        </Stack>
        <Button
          type="submit"
          mt="69px"
          colorScheme="blue"
          color="#FFFFFF"
          borderRadius="4px"
          size="lg"
        >
          Sign in
        </Button>
        <Link
          href="/registration"
          textAlign="center"
          mt="8"
          color="#577BF9"
          fontSize="14px"
        >
          Create my account
        </Link>
      </Flex>
    </Flex>
  );
}
