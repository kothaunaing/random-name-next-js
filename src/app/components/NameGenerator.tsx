import { generateNames } from "@/backend/generateNames";
import React from "react";
import Form from "./Form";

const NameGenerator = async ({ numberOfNames, gender, lang, length }) => {
  const generatedNames = generateNames({
    numberOfNames: numberOfNames,
    language: lang,
    length: length,
    gender: gender,
  });

  return (
    <div className="grid justify-center m-2">
      <div className="flex gap-2 items-center ">
        <Form />
      </div>
      <div className="mt-2">
        <h1 className="text-lg font-bold">Generated Names</h1>
        <div className="mt-3 grid gap-2">
          {generatedNames.map((name, index) => {
            return (
              <div key={`name-${index}`} className="flex items-center gap-2">
                <p className="font-bold bg-blue-500 size-8 flex items-center justify-center ">
                  {index + 1}
                </p>
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NameGenerator;
