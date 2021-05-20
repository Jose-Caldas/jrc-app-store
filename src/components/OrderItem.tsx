import { Flex, Text, Box } from "@chakra-ui/layout";

interface BoxOrderProps {
  value: string;
  dated_at: string;
}

export function OrderItem({ value, dated_at }: BoxOrderProps) {
  return (
    <Box width="740px" height="112px" bg="#FFFFFF" pt="27px" pl="22px">
      <Text fontWeight="600" fontSize="18px" mb="10px">
        {value}
      </Text>
      <Text fontWeight="400" fontSize="14px" color="#8886A5">
        {dated_at}
      </Text>
    </Box>
  );
}
