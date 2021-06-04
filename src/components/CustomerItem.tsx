import { Flex, Text, Box } from "@chakra-ui/layout";

interface BoxOrderProps {
  name: string;
  email: string;
}

export function CustomerItem({ name, email }: BoxOrderProps) {
  return (
    <Box width="740px" height="112px" bg="#FFFFFF" pt="27px" pl="22px">
      <Text fontWeight="600" fontSize="18px" mb="10px">
        {name}
        {email}
      </Text>
    </Box>
  );
}
