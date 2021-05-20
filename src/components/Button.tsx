import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <ChakraButton
      type="submit"
      mt="69px"
      colorScheme="blue"
      color="#FFFFFF"
      borderRadius="4px"
      width="379px"
      height="50px"
      {...rest}
    >
      {title}
    </ChakraButton>
  );
}
