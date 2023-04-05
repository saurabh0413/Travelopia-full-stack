import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Navbar from "../Components/Navbar";
export const Traveldata = () => {
  const toast = useToast();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const submitForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("https://travel-gixb.onrender.com/travelinfo", data);
      toast({
        title: "Your data added successfully",

        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  return (
    <>
      <Navbar />
      <Heading as="h1" mb="8" textAlign="center">
        Travel Details
      </Heading>
      <Box
        maxW="md"
        mx="auto"
        mt="8"
        p="6"
        rounded="md"
        boxShadow="lg"
        bg="white"
      >
        <form onSubmit={submitForm}>
          <FormControl mb="4" isRequired>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              type="text"
              name="Name"
              onChange={handleChange}
              required
              placeholder="Enter full name"
            />
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              type="email"
              name="Email"
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel>Where do you want to go?</FormLabel>
            <Select
              placeholder="choose location"
              name="Location"
              onChange={handleChange}
            >
              <option value="India">India</option>
              <option value="Africa">Africa</option>
              <option value="Europe">Europe</option>
            </Select>
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel>No. of travellers</FormLabel>
            <Input
              type="number"
              name="No_of_travellers"
              onChange={handleChange}
              placeholder="enter number of travellers"
            />
          </FormControl>
          <FormControl mb="4" isRequired>
            <FormLabel>Budget per person </FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
                children="$"
              />
              <Input
                type="number"
                name="Budget"
                onChange={handleChange}
                placeholder="Enter your budget"
              />
            </InputGroup>
          </FormControl>
          <Button
            type="submit"
            colorScheme="teal"
            size="lg"
            w="full"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>
        </form>
      </Box>
    </>
  );
};
