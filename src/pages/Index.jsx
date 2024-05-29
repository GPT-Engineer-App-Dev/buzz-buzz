import { Box, Container, Flex, Input, VStack, Text, HStack, Avatar, Heading, IconButton } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" height="100vh" display="flex" flexDirection="column" p={0}>
      {/* Navigation Bar */}
      <Box bg="brand.700" color="white" p={4}>
        <Heading size="md">Chat App</Heading>
      </Box>

      <Flex flex="1" overflow="hidden">
        {/* Sidebar for Contacts */}
        <Box bg="brand.100" width={{ base: "100%", md: "300px" }} p={4} overflowY="auto">
          <VStack align="start" spacing={4}>
            <Heading size="sm">Contacts</Heading>
            <HStack>
              <Avatar name="John Doe" />
              <Text>John Doe</Text>
            </HStack>
            <HStack>
              <Avatar name="Jane Smith" />
              <Text>Jane Smith</Text>
            </HStack>
            {/* Add more contacts here */}
          </VStack>
        </Box>

        {/* Main Chat Area */}
        <Flex flex="1" direction="column" bg="white" p={4} overflowY="auto">
          <VStack flex="1" spacing={4} align="start">
            <Text>John Doe: Hello!</Text>
            <Text>You: Hi there!</Text>
            {/* Add more messages here */}
          </VStack>
        </Flex>
      </Flex>

      {/* Text Input Area */}
      <Box p={4} bg="brand.200">
        <HStack>
          <Input placeholder="Type a message..." flex="1" />
          <IconButton aria-label="Send" icon={<FaPaperPlane />} colorScheme="blue" />
        </HStack>
      </Box>
    </Container>
  );
};

export default Index;