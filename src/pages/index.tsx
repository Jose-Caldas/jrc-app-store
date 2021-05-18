import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex align="center" justify="center" width="100vw" height="100vh">
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
        <Stack spacing="8">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              bg="#E3E3F2"
              borderRadius="4px"
              variant="filled"
              size="lg"
            ></Input>
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Password</FormLabel>

            <Input
              name="password"
              id="password"
              type="password"
              borderRadius="4px"
              bg="#E3E3F2"
              variant="filled"
              size="lg"
            ></Input>
          </FormControl>
        </Stack>
        <Button
          type="submit"
          mt="69px"
          colorScheme="blue"
          color="#FFFFFF"
          borderRadius="4px"
          size="lg"
        >
          Entrar
        </Button>
        <Text textAlign="center" mt="8" color="#577BF9" fontSize="14px">
          Create my account
        </Text>
      </Flex>
    </Flex>
  );
}
