import { useState } from "react";
import "./App.css";
import Carrousel from "./components/Carrousel";
import CategorySelector from "./components/CategorySelector";
import Header from "./components/Header";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [page, setPage] = useState(1);
  const [url, setUrl] = useState(
    `https://www.omdbapi.com/?apikey=b788dd94&s=disney`
  );

  const { data, loading } = useFetch(url, page);

  console.log(url);

  return (
    <>
      <Header />
      <Carrousel />
      <CategorySelector setUrl={setUrl} setPage={setPage} />
      {loading ? (
        <p>cargando...</p>
      ) : (
        <>
          {data && (
            <>
              <div className="grid grid-cols-4 items-center  justify-items-center text-center my-20 gap-20 mx-10 ">
                {data?.Search.map((card) =>
                  card.Poster != "N/A" ? (
                    <div key={card.imdbID} className="relative group">
                      <img
                        src={card.Poster}
                        alt=""
                        className="h-[400px]  hover:-translate-y-2 cursor-pointer hover:border-2 duration-100 card-glow rounded-lg"
                      />
                    </div>
                  ) : (
                    <></>
                  )
                )}
              </div>
              <div className="w-full flex justify-center items-center gap-10">
                <button
                  onClick={() => setPage(page - 1)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
                  disabled={page === 1}
                >
                  {"<="}
                </button>
                <p>
                  Pagina {page} de {data?.totalResults}
                </p>
                <button
                  onClick={() => setPage(page + 1)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-400"
                  disabled={page === Number(data.totalResults)}
                >
                  {"=>"}
                </button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
