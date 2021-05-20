import { Button, Icon } from "@chakra-ui/react";
import { ElementType } from "react";

interface SelectQuantyProps {
  color: string;
  icon: ElementType;
}

export function SelectQuanty({ color, icon }: SelectQuantyProps) {
  return (
    <Button bg="transparent">
      <Icon as={icon} color={color} fontSize="20px" />
    </Button>
  );
}
