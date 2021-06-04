import { Flex, Text, SimpleGrid, Box, VStack, Link } from "@chakra-ui/react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type RegistrationFormData = {
  name: string;
  surname: string;
  gender: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const RegistrationFormSchema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  gender: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6, "minimum 6 characters"),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "passwords must be the same"),
});

export default function Registration() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(RegistrationFormSchema),
  });

  const { errors } = formState;

  const handleRegisterUser = async (values: RegistrationFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Flex
      align="center"
      justify="center"
      width="100vw"
      height="100vh"
      bg="#FFFFFF"
    >
      <Box as="form" width="800px" onSubmit={handleSubmit(handleRegisterUser)}>
        <Text fontSize="30px" fontWeight="600" textAlign="center" mb="59px">
          Create my account
        </Text>

        <VStack spacing="4">
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
            <Input
              name="name"
              type="name"
              label="Name"
              {...register("name")}
              error={errors.name}
            />
            <Input
              name="surname"
              type="surname"
              label="Surname"
              {...register("surname")}
              error={errors.surname}
            />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
            <Input
              name="gender"
              type="gender"
              label="Gender"
              {...register("gender")}
              error={errors.gender}
            />
            <Input
              name="email"
              type="email"
              label="E-mail"
              {...register("email")}
              error={errors.email}
            />
          </SimpleGrid>
          <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} width="100%">
            <Input
              name="password"
              type="password"
              label="Password"
              {...register("password")}
              error={errors.password}
            />
            <Input
              name="password_confirmation"
              type="password"
              label="Password Confirmation"
              {...register("password_confirmation")}
              error={errors.password_confirmation}
            />
          </SimpleGrid>
        </VStack>

        <Flex align="center" justify="center">
          <Link href="/customers" _hover={{ border: "none" }}>
            <Button
              type="submit"
              title="Submit"
              isLoading={formState.isSubmitting}
            />
          </Link>
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
