import React, { useState, useRef, useEffect } from 'react';
import { Text, Box, Flex, Center, InputGroup, InputLeftElement, Textarea } from '@chakra-ui/react';
import "../App.css";
import NavBar from '../Components/Navbar';
import { Search2Icon } from '@chakra-ui/icons';
import Top from "../assets/top_img.png"
const Home = () => {
  const [typed, setTyped] = useState("");
  const [displayText, setDisplayText] = useState(""); // State to update the display after debounce

  // Handle typed text but debounce the state update
  useEffect(() => {
    // Set a timeout to update displayText when typed changes
    const timeoutId = setTimeout(() => {
      setDisplayText(typed);
    }, 500);  // Debounce delay of 500ms

    // Cleanup the previous timeout when the component unmounts or typed changes
    return () => clearTimeout(timeoutId);
  }, [typed]);  // Effect depends on `typed`

  // Handle input change
  const handleTypedText = (e) => {
    setTyped(e.target.value);  // Update typed state on every key press
  };

  return (
    <>
      <NavBar />

      <Flex w="100%" h="100vh" flexDirection={{ base: "column", md: "column", lg: "row" }}>
        <Center flexDirection={"column"} w={{ base: "100%", md: "80%", lg: "50%" }} h={{ base: "30vh", md: "30vh", lg: "100vh" }}
          bgImage={`url(${Top})`}
          bgSize="cover"       // Ensures the image covers the entire area
          bgRepeat="no-repeat"  // Prevents the image from repeating
          bgPosition="center"
        >
          <Text
            bgGradient="linear(to-r, #039BE5, #6D4C41)"
            bgClip="text"
            color="transparent"
            fontSize={{ base: "6xl", md: "7xl", lg: "8xl" }} fontFamily={"head"} >Kshanika</Text>
          <Box display={"flex"} alignContent={"center"} alignItems={"center"} justifyContent={"center"}>

            <Textarea
              w="280px" borderRadius={"md"} borderColor={"#90A4AE"}
              value={typed}
              onChange={handleTypedText}
              placeholder='Write your thoughts coming from your heart...'
              size='sm'
            />

          </Box>
        </Center>

        <Box
          w={{ base: "100%", md: "100%", lg: "50%" }}
          h={{ base: "100vh", md: "100vh", lg: "100vh" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
        >
          <Box
            w={{ base: "100%", md: "99%" }}
            m="auto"
            h={{ base: "100vh", md: "100vh" }}
            overflow="auto"
            p="0.5"
            borderRadius="none"
            css={{
              "&::-webkit-scrollbar": {
                width: "5px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#F44336",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#B0BEC5",
                borderRadius: "10px",
              },
            }}
          >
            <Box bg="red" w="100%" h="100vh">
              {displayText && <Text color="white" fontSize="2xl">{displayText}</Text>}
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
