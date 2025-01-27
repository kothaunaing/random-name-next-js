import { boyNamesBurmese, girlNamesBurmese } from "@/data/names";

export let generatedNames: string[] = [];

interface SingleName {
  namesArray: string[];
  length: number;
  language: string;
}

interface NameParam {
  numberOfNames: number;
  language: string;
  length: number;
  gender: string;
}

export function generateNames({
  numberOfNames,
  language,
  length,
  gender,
}: NameParam): string[] {
  let namesArray: string[];

  console.log(language, length, gender);

  const names: string[] = [];

  if (gender === "male") {
    namesArray =
      language === "my"
        ? Object.values(boyNamesBurmese)
        : Object.keys(boyNamesBurmese);
  } else {
    namesArray =
      language === "my"
        ? Object.values(girlNamesBurmese)
        : Object.keys(girlNamesBurmese);
  }

  for (let i = 0; i < numberOfNames; i++) {
    const name = generateSingleName({ namesArray, length, language });
    names.push(name);
  }

  generatedNames = names;
  console.log(names);
  return names;
}

function generateSingleName({
  namesArray,
  length,
  language,
}: SingleName): string {
  let finalName: string = "";

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * namesArray.length);
    finalName += namesArray[randomNumber] + (language === "my" ? "" : " ");
  }

  return finalName.trim();
}
