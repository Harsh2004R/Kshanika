import { Text, Box, Flex, Center } from '@chakra-ui/react'
import React from 'react'
import "../App.css"
import NavBar from '../Components/Navbar'
const Home = () => {
  return (
    <>

      <NavBar />

      <Flex w="100%" h="100vh" flexDirection={{ base: "column", md: "column", lg: "row" }} >
        <Center w={{ base: "100%", md: "80%", lg: "50%" }} h={{ base: "30vh", md: "30vh", lg: "100vh" }} bg="#fff">
          <Text 
           bgGradient="linear(to-r, #039BE5, #6D4C41)"
           bgClip="text"
           color="transparent"
          fontSize={{base:"6xl",md:"7xl",lg:"8xl"}} fontFamily={"head"} >Kshanika</Text>
        </Center>
        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          h={{ base: "100vh", md: "100vh", lg: "100vh" }}
          // border="1px solid lime"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >

          {/*  sliding box here   */}
          <Box
            w={{ base: "100%", md: "99%" }}
            m="auto"
            h={{ base: "100vh", md: "100vh" }}
            overflow="auto"
            p="0.5"
            borderRadius="none"
            css={{
              "&::-webkit-scrollbar": {
                width: "5px", // Adjust the width as per your preference
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#F44336", // Customize the scrollbar thumb color
                borderRadius: "10px", // Adjust the scrollbar thumb border-radius
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#B0BEC5", // Customize the scrollbar track color
                borderRadius: "10px", // Adjust the scrollbar track border-radius
              },
            }}
          >

            <Box bg="red" w="100%" h="100vh">

            </Box>
            <Box bg="blue" w="100%" h="100vh">

            </Box>
            <Box bg="green" w="100%" h="100vh">

            </Box>
            <Box bg="yellow" w="100%" h="100vh">

            </Box>
            <Box bg="cyan" w="100%" h="100vh">

            </Box>


          </Box>
        </Box>
      </Flex>


    </>
  )
}

export default Home
