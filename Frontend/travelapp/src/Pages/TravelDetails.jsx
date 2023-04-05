import { Table, Thead, Tbody, Tr, Th, Td, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import styled from "styled-components";
const StyledTable = styled(Table)`
  border-collapse: collapse;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  font-size: 14px;

  th,
  td {
    text-align: center;
    padding: 12px;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tbody tr:hover {
    background-color: #ddd;
  }
`;
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
      <StyledTable>
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
            { traveldata ? traveldata.map((item, index) => (
              <Tr key={index}>
                <Td>{index + 1}</Td>
                <Td>{item.Name}</Td>
                <Td>{item.Email}</Td>
                <Td>{item.Location}</Td>
                <Td>{item.No_of_travellers}</Td>
                <Td>{item.Budget}</Td>
              </Tr>
            )) : <Text>No data available</Text>}
          </Tbody>
        </Table>
      </StyledTable>
    </>
  );
};
