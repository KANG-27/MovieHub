
import { useState } from "react";
import "./App.css";
import Carrousel from "./components/Carrousel";
import CategorySelector from "./components/CategorySelector";
import Header from "./components/Header";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [url, setUrl] = useState("https://www.omdbapi.com/?apikey=b788dd94&s=disney")

  const { data, loading } = useFetch(url);

  console.log(url)

  return (
    <>
      <Header />
      <Carrousel />
      <CategorySelector setUrl={setUrl}/>
      {loading ? (
        <p>cargando...</p>
      ) : (
        <div className="grid grid-cols-4 items-center w-full justify-items-center text-center my-10 gap-10">
          {data?.Search.map((card) => (
            <img src={card.Poster} alt="" height={400}/>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
