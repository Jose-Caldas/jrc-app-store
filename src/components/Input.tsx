import {
  FormControl,
  FormLabel,
  Input as ChackraInput,
  InputProps as ChackraInputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputProps extends ChackraInputProps {
  name: string;
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, ...rest },
  ref
) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChackraInput
        name={name}
        id={name}
        bg="#E3E3F2"
        borderRadius="4px"
        variant="filled"
        width="379px"
        height="50px"
        ref={ref}
        {...rest}
      ></ChackraInput>
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
