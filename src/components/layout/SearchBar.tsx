"use client";

import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";

import { useDebounce } from "@/hooks/useDebounce";
import { searchArticles } from "@/services/search.service";

export default function SearchBar() {

  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);

  const [results, setResults] = useState([]);

  const debounced = useDebounce(query);

  useEffect(() => {

    async function load() {

      if (!debounced) {

        setResults([]);

        return;

      }

      setLoading(true);

      const data = await searchArticles(debounced);

      setResults(data);

      setLoading(false);

    }

    load();

  }, [debounced]);

  return (

    <div className="relative w-full max-w-md">

      <Search
        size={18}
        className="absolute left-3 top-3 text-gray-500"
      />

      <input

        value={query}

        onChange={(e)=>setQuery(e.target.value)}

        placeholder="Search articles..."

        className="w-full rounded-lg border py-2 pl-10 pr-10"

      />

      {query && (

        <button

          onClick={()=>setQuery("")}

          className="absolute right-3 top-3"

        >

          <X size={18}/>

        </button>

      )}

      {loading && (

        <div className="mt-2 text-sm">

          Searching...

        </div>

      )}

      {!loading && results.length>0 && (

        <div className="absolute mt-2 w-full rounded-lg border bg-white shadow-lg">

          {results.map((item:any)=>(

            <div

              key={item.id}

              className="border-b p-3"

            >

              {item.title}

            </div>

          ))}

        </div>

      )}

    </div>

  );

}
