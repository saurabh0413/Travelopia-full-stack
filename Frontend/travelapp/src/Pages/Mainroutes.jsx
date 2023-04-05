import React from "react";
import { Route, Routes } from "react-router-dom";
import { Traveldata } from "./Traveldata";
import { TravelDetails } from "./TravelDetails";
export const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Traveldata />} />
        <Route path="/details" element={<TravelDetails />} />
      </Routes>
    </div>
  );
};
