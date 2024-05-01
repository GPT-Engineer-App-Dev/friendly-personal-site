import { Box, Flex, Text, Heading, VStack, Button, Link, Stack, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Index = () => {
  const [display, setDisplay] = useState('none');

  // Toggle mobile menu display
  const toggleDisplay = () => {
    setDisplay(display === 'none' ? 'flex' : 'none');
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="header" justifyContent="space-between" p={4} bg="gray.200" wrap="wrap" align="center">
        <Heading size="lg">GPT Engineer</Heading>
        <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} mt={{ base: 4, md: 0 }} spacing={4}>
          <Link href="#about" p={2}>About</Link>
          <Link href="#projects" p={2}>Projects</Link>
          <Link href="#contact" p={2}>Contact</Link>
        </Stack>
        <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<FaBars />}
          display={{ base: 'flex', md: 'none' }}
          onClick={toggleDisplay}
        />
      </Flex>

      {/* Mobile Menu */}
      <Flex
        w="100vw"
        bgColor="gray.200"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
        display={display}
      >
        <Stack mt={8} spacing={4}>
          <Link href="#about" p={2} onClick={toggleDisplay}>About</Link>
          <Link href="#projects" p={2} onClick={toggleDisplay}>Projects</Link>
          <Link href="#contact" p={2} onClick={toggleDisplay}>Contact</Link>
        </Stack>
      </Flex>

      {/* About Section */}
      <Box id="about" p={4}>
        <Heading size="md">About Me</Heading>
        <Text mt={2}>I am a web developer with a passion for building beautiful and functional web applications.</Text>
      </Box>

      {/* Projects Section */}
      <Box id="projects" p={4}>
        <Heading size="md">Projects</Heading>
        <VStack spacing={4}>
          <Text>Project 1: AI-driven web app</Text>
          <Text>Project 2: Responsive design portfolio</Text>
        </VStack>
      </Box>

      {/* Contact Section */}
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