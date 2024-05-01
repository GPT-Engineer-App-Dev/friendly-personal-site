import { Box, Flex, Text, Heading, VStack, Button, Link, HStack } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="header" justifyContent="space-between" p={4} bg="gray.100">
        <Heading size="lg">GPT Engineer</Heading>
        <Box display="flex" justifyContent="space-between">
          <Link href="#about" p={2}>About</Link>
          <Link href="#projects" p={2}>Projects</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </Box>
      </Flex>
      <Box id="about" p={4}>
        <Heading size="md">About Me</Heading>
        <Text mt={2}>I am a web developer with a passion for building beautiful and functional web applications.</Text>
      </Box>
      <Box id="projects" p={4}>
        <Heading size="md">Projects</Heading>
        <VStack spacing={4}>
          <Text>Project 1: AI-driven web app</Text>
          <Text>Project 2: Responsive design portfolio</Text>
        </VStack>
      </Box>
      <Box id="contact" p={4}>
        <Heading size="md">Contact</Heading>
        <VStack spacing={4}>
          <Button leftIcon={<FaEnvelope />}>Email</Button>
          <Button leftIcon={<FaGithub />}>GitHub</Button>
          <Button leftIcon={<FaLinkedin />}>LinkedIn</Button>
        </VStack>
      </Box>
      <Box as="footer" p={4} bg="gray.100" mt={4}>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>© 2023 GPT Engineer. All rights reserved.</Text>
          <Link href="#privacy-policy" p={2}>Privacy Policy</Link>
          <HStack spacing={4}>
            <Button as="a" href="https://facebook.com" aria-label="Facebook" leftIcon={<FaFacebook />}></Button>
            <Button as="a" href="https://twitter.com" aria-label="Twitter" leftIcon={<FaTwitter />}></Button>
            <Button as="a" href="https://instagram.com" aria-label="Instagram" leftIcon={<FaInstagram />}></Button>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;