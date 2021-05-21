import { Flex, Link, Stack, Text } from "@chakra-ui/react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SignInFormData = {
  email: string;
  password: string;
};

const SignInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema),
  });

  const handleSignIn = async (values: SignInFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  const { errors } = formState;
  console.log(errors);

  return (
    <Flex
      align="center"
      justify="center"
      width="100vw"
      height="100vh"
      bg="#FFFFFF"
    >
      <Flex
        alignItems="center"
        justify="center"
        as="form"
        width="100%"
        flexDirection="column"
        p="8"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Text mb="70px" textAlign="center" fontSize="30px">
          Login
        </Text>
        <Stack spacing="4">
          <Input
            name="email"
            type="email"
            label="E-mail"
            {...register("email")}
            error={errors.email}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            {...register("password")}
            error={errors.password}
          />
        </Stack>

        <Button title="Sign in" isLoading={formState.isSubmitting} />

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
