import React, { useState } from 'react';
import { Box, Flex, Button, Image } from '@chakra-ui/react';
import Signup from './Signup';

export default function Nav() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingY="1rem"
      mx={10}
      borderBottom={'2px solid #969BAB'}
    >
      <Box>
        <Image src="quiz-app/public/assets/booklogo2.jpg" />
      </Box>
      <Flex gap={4} align="center">
        <Button href="#" bg={'#D2B6FF'} onClick={() => setModalOpen(true)}>
          Signup
        </Button>
        <Signup isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        <Button href="#" bg={'#ABC5FE'}>
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
