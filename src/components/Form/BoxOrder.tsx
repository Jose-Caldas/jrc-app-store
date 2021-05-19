import { Flex, Text, Box } from "@chakra-ui/layout";

interface BoxOrderProps {
  value: number;
  dated_at: string;
}

export function BoxOrder({ value, dated_at }) {
  return (
    <Box width="740px" height="112px" bg="#FFFFFF" pt="27px" pl="22px">
      <Text fontWeight="600" fontSize="18px" mb="10px">
        {value}
      </Text>
      <Text fontWeight="400" fontSize="12px">
        {dated_at}
      </Text>
    </Box>
  );
}
