import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const words = [
  "paintings",
  "mandalas",
  "portraits",
  "resin art",
  "crochet decor",
  "glass paintings",
];

const AnimatedSearch = ({ search, setSearch }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <Search
        size={22}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-neutral-500"
      />

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`Search for ${words[index]}`}
        className="w-full pl-14 pr-6 py-4 rounded-xl bg-white border border-neutral-300 outline-none focus:border-[#8B6B4A] transition"
      />
    </div>
  );
};

export default AnimatedSearch;