import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);  // O puedes definir un tipo específico en lugar de 'any'
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        console.log(jsonData)
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
  }, [url]);  // Se agrega la dependencia 'url'

  return { data, loading, error };
};
