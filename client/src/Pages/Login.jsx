import React from 'react'
import { Box, Center, Image, Input, VStack, FormControl, FormLabel, InputGroup, InputLeftElement, Textarea, Button } from "@chakra-ui/react"
import "../App.css"
import { BsPerson } from 'react-icons/bs'
import {
  MdPassword,
  MdOutlineEmail,
} from 'react-icons/md'
import login from "../assets/login.png"
const Login = () => {
  return (
    <Center w="100%" h="100vh" bg="#222"
    >
      <Center
        pos={"relative"}
        // border={"1px solid red"}
        h={{ base: "93vh", md: "93vh", lg: "98vh" }}
        w={{ base: "100%", md: "500px", lg: "600px" }}

      >
        <Image w="100%" h="100%" src={login} alt="login.png" />
        <Box w="100%" h="auto"
          //  border="1px solid red" 
          bg="transparent" pos={"absolute"} >

          {/* <Input  w="50%" type='text' variant={"undecorated"}/> */}
          <Box bg="transparent" borderRadius="lg">
            <Box m={{ base: "50px", md: "80px", lg: "100px" }} color="#0B0E3F">
              <VStack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Mail</FormLabel>
                  <InputGroup borderColor="#999">
                    <InputLeftElement pointerEvents="none">
                      <MdOutlineEmail color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel>Password</FormLabel>
                  <InputGroup borderColor="#999">
                    <InputLeftElement pointerEvents="none">
                      <MdPassword color="gray.800" />
                    </InputLeftElement>
                    <Input type="text" size="md" />
                  </InputGroup>
                </FormControl>
                <FormControl id="name" >
                  <Box display={"flex"} justifyContent={"right"} border={"1px solid line"}>
                    <Button variant="solid" bg="#000" color="white" transition={"0.4s ease"} _hover={{ backgroundColor: "#0D74FF" }}>
                      Login
                    </Button>
                  </Box>

                </FormControl>
              </VStack>
            </Box>
          </Box>


        </Box>
      </Center>
    </Center>

  )
}

export default Login
