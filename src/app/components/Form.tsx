"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Form = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [names, setNames] = useState("");
  const [lang, setLang] = useState("En");
  const [gender, setGender] = useState("Male");
  const [length, setLength] = useState("3");

  useEffect(() => {
    setNames(searchParams.get("names") || "");
  }, [searchParams.get("names")]);

  return (
    <form
      className=""
      onSubmit={(e) => {
        e.preventDefault();
        router.push(
          `?names=${names}&gender=${gender}&lang=${lang}&length=${length}`
        );
      }}
    >
      <div className="flex gap-1">
        <input
          type="number"
          min={0}
          max={500}
          value={names}
          onChange={(e) => setNames(e.target.value)}
          className="border border-slate-400 p-2 outline-blue-600 rounded-md w-[200px]"
          placeholder="Number of names"
        />

        <button className="bg-blue-600 p-2 text-white rounded-md hover:opacity-70">
          Generate
        </button>
      </div>

      <div className="mt-2 flex gap-1">
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="border p-2"
        >
          <option>My</option>
          <option>En</option>
        </select>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border p-2"
        >
          <option>Male</option>
          <option>Female</option>
        </select>
        <select
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="border p-2"
        >
          <option>2</option>
          <option>3</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
