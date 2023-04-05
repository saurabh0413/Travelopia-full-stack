import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";

export const TravelDetails = () => {
  const [traveldata, setTravelData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let Data = await axios.get("http://localhost:8787/travelinfo");
      Data = await Data.data;
      setTravelData(Data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Navbar />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Sr.No</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>Location</Th>
            <Th>No.of.Travellers</Th>
            <Th>Budget</Th>
          </Tr>
        </Thead>
        <Tbody>
          {traveldata.map((item, index) => (
            <Tr key={index}>
              <Td>{index+1}</Td>
              <Td>{item.Name}</Td>
              <Td>{item.Email}</Td>
              <Td>{item.Location}</Td>
              <Td>{item.No_of_travellers}</Td>
              <Td>{item.Budget}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};
