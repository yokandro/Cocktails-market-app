import { useEffect, useState } from "react";

export const useFetchCocktails = (link) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(link);
        if (!response.ok) {
          throw new Error(`Failed to fetch with status: ${response.status}`);
        }
        const data = await response.json();
        setData(data.drinks);
      } catch (err) {
        console.log("Failed to fetch: ", err);
      }
    };

    fetchData();
  }, [link]);
  return {
    data: data == null ? "not-found" : data,
  };
};
