import {
  Flex,
  HStack,
  Text,
  Stack,
  FormLabel,
  SimpleGrid,
  FormControl,
  Box,
  Heading,
  Divider,
  VStack,
  Button,
  Link,
} from "@chakra-ui/react";
import { Input } from "../components/Form/Input";

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

        <Flex>
          <Button
            width="377px"
            marginX="auto"
            mt="59px"
            colorScheme="blue"
            color="#FFFFFF"
            borderRadius="4px"
            size="lg"
          >
            Submit
          </Button>
        </Flex>
        <Flex>
          <Link
            href="http://localhost:3000/"
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
