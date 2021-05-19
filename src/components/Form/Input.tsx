import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChackraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInput
        name={name}
        id={name}
        bg="#E3E3F2"
        borderRadius="4px"
        variant="filled"
        size="lg"
        {...rest}
      ></ChackraInput>
    </FormControl>
  );
}
