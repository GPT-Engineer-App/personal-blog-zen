import { Box, Container, Flex, Heading, Text, VStack, Link, HStack, Spacer } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Box as="nav" bg="brand.800" color="white" py={4}>
        <Container maxW="container.lg">
          <Flex align="center">
            <Heading as="h1" size="lg">
              <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }} color="white">
                My Blog
              </Link>
            </Heading>
            <Spacer />
            <HStack spacing={8}>
              <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none' }} color="white">
                Home
              </Link>
              <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'none' }} color="white">
                About
              </Link>
              <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none' }} color="white">
                Contact
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content Area */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl" mb={4}>Welcome to My Blog</Heading>
            <Text fontSize="lg">
              This is a place where I share my thoughts, experiences, and stories. Stay tuned for more updates!
            </Text>
          </Box>
          <Box>
            <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
            <VStack spacing={4} align="stretch">
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading as="h4" size="md">Post Title 1</Heading>
                <Text mt={2}>This is a summary of the first post...</Text>
              </Box>
              <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
                <Heading as="h4" size="md">Post Title 2</Heading>
                <Text mt={2}>This is a summary of the second post...</Text>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="brand.800" color="white" py={4} mt={8}>
        <Container maxW="container.lg">
          <Text textAlign="center">© {new Date().getFullYear()} My Blog. All rights reserved.</Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;