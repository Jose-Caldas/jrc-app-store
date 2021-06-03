import { Flex, Text, Box } from "@chakra-ui/react";
import { numberFormat } from "../components/ProductItem";

interface BoxOrderProps {
  value: number;
  date: string;
}

export function OrderItem({ value, date }: BoxOrderProps) {
  return (
    <Box width="740px" height="112px" bg="#FFFFFF" pt="27px" pl="22px">
      <Flex flexDirection="column">
        <Text fontWeight="600" fontSize="18px" mb="10px">
          {numberFormat.format(value)}
        </Text>
        <Text color="#8886A5" fontSize="12px">
          {date}
        </Text>
      </Flex>
    </Box>
  );
}
