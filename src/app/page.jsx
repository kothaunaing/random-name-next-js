import NameGenerator from "./components/NameGenerator";

export default function Home({ searchParams }) {
  return (
    <div>
      <h1 className="sticky top-0 right-0 left-0 p-2 bg-slate-100 font-bold text-xl border-b border-b-slate-300">
        Random Name Generator
      </h1>
      <NameGenerator
        numberOfNames={parseInt(searchParams?.names) || 10}
        lang={searchParams?.lang?.toLowerCase() || "En"}
        gender={searchParams?.gender?.toLowerCase() || "male"}
        length={parseInt(searchParams?.length) || 3}
      />
    </div>
  );
}
