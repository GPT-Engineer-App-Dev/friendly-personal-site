import { Box, Flex, Text, Heading, VStack, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="header" justifyContent="space-between" p={4} bg="gray.100">
        <Heading size="lg">GPT Engineer</Heading>
        <Box>
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
    </Box>
  );
};

export default Index;