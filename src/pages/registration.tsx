import { Flex, Text, SimpleGrid, Box, VStack, Link } from "@chakra-ui/react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function Registration() {
  return (
    <Flex
      align="center"
      justify="center"
      width="100vw"
      height="100vh"
      bg="#FFFFFF"
    >
      <Box width="800px">
        <Text fontSize="30px" fontWeight="600" textAlign="center" mb="59px">
          Create my account
        </Text>

        <VStack spacing="4">
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
            <Input name="name" type="name" label="Name" />
            <Input name="name" type="surname" label="Surname" />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
            <Input name="gender" type="gender" label="Gender" />
            <Input name="email" type="email" label="E-mail" />
          </SimpleGrid>
          <>
            <Input
              name="password"
              type="password"
              label="Password"
              width="384px"
            />
          </>
        </VStack>

        <Flex align="center" justify="center">
          <Button title="Submit" />
        </Flex>
        <Flex>
          <Link
            href="/orders"
            marginX="auto"
            color="#577BF9"
            fontSize="14px"
            mt="30px"
          >
            I already have an account
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}
