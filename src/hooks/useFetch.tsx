import { useEffect, useState } from "react";

interface Movie {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
  }
  
  interface FetchResponse {
    Search: Movie[];
    totalResults: string;
    Response: string;
  }
  
  export const useFetch = (url: string, page: number) => {
    const [data, setData] = useState<FetchResponse | null>(null);  // Tipado adecuado
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(url + `&page=${page}`);
          const jsonData: FetchResponse = await response.json(); // Tipando la respuesta
          console.log(jsonData);
          setData(jsonData);
        } catch (err: unknown) {
          if (err instanceof Error) {
            setError(err);
          } else {
            setError(new Error("An unknown error occurred"));
          }
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }, [url, page]);
  
    return { data, loading, error };
  };
  