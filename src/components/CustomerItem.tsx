import { Flex, Text, Box } from "@chakra-ui/layout";

interface BoxOrderProps {
  name?: string;
  email?: string;
}

export function CustomerItem({ name, email }: BoxOrderProps) {
  return (
    <Box width="740px" height="80px" bg="#FFFFFF" pt="10px" pl="22px">
      <Text fontWeight="600" fontSize="18px" mb="10px">
        {name}
      </Text>
      <Text fontWeight="600" fontSize="14px" mb="10px" color="#8886A5">
        {email}
      </Text>
    </Box>
  );
}
