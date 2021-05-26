import { Flex, Text, Box } from "@chakra-ui/layout";

interface BoxOrderProps {
  value?: string;
  date?: string;
  name?: string;
  email?: string;
}

export function OrderItem({ value, date, name, email }: BoxOrderProps) {
  return (
    <Box width="740px" height="112px" bg="#FFFFFF" pt="27px" pl="22px">
      <Text fontWeight="600" fontSize="18px" mb="10px">
        {value}
        {name}
      </Text>
      <Text fontWeight="400" fontSize="14px" color="#8886A5">
        {date}
        {email}
      </Text>
    </Box>
  );
}
