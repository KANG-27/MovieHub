import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Header from "../components/Header";

function MovieDetails() {
  const { id } = useParams();
  const url = `https://www.omdbapi.com/?apikey=b788dd94&i=${id}`;

  const { data, loading } = useFetch(url, 1);

  console.log(data);

  return (
    <div className="m-10">
      <Header />
      {loading ? (
        <div>cargando</div>
      ) : (
        data && (
          <div className="flex justify-center">
            <img src={data.Poster} alt="" width={450} />
            <div className="mx-10 flex flex-col gap-5 w-[50%]">
              <div className="details-container flex flex-col gap-10 w-full">
                {/* Título y Año */}
                <h1 className="text-3xl font-bold">
                  {data.Title} ({data.Year})
                </h1>

                {/* Género, Duración, y Clasificación */}
                <div className="info-block flex gap-6">
                  <p>
                    <strong>Género:</strong> {data.Genre}
                  </p>
                  <p>
                    <strong>Duración:</strong> {data.Runtime}
                  </p>
                  <p>
                    <strong>Clasificación:</strong> {data.Rated}
                  </p>
                </div>

                {/* Sinopsis */}
                <div className="plot">
                  <h2 className="font-semibold">Sinopsis:</h2>
                  <p>{data.Plot}</p>
                </div>

                {/* Director, Escritor, y Actores */}
                <div className="info-block flex gap-6">
                  <p>
                    <strong>Director:</strong> {data.Director}
                  </p>
                  <p>
                    <strong>Escritor:</strong> {data.Writer}
                  </p>
                  <p>
                    <strong>Actores:</strong> {data.Actors}
                  </p>
                </div>

                {/* Calificación */}
                <div className="ratings flex gap-4">
                  <div>
                    <h3 className="font-semibold">Calificación IMDb</h3>
                    <p>{data.imdbRating} / 10</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Rotten Tomatoes</h3>
                    <p>{data.Ratings[1]?.Value}</p>
                  </div>
                </div>

                {/* Otros detalles */}
                <div className="other-details flex gap-6">
                  <p>
                    <strong>País:</strong> {data.Country}
                  </p>
                  <p>
                    <strong>Idioma:</strong> {data.Language}
                  </p>
                  <p>
                    <strong>Premios:</strong> {data.Awards}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
export default MovieDetails;
