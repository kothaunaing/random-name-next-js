"use client";
import { generateNames } from "@/backend/generateNames";
import React from "react";

const GenerateNamesButton = () => {
  return (
    <button
      onClick={() => {
        generateNames({
          numberOfNames: 10,
          language: "my",
          length: 3,
          gender: "male",
        });
      }}
      className="bg-blue-600 p-2 text-white rounded-md hover:opacity-70"
    >
      Generate
    </button>
  );
};

export default GenerateNamesButton;
