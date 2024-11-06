import { useRef } from "react";
import React from "react";

// Definimos una interfaz para las props del componente
interface CategorySelectorProps {
  setUrl: React.Dispatch<React.SetStateAction<string>>; // Tipado de setUrl como función que toma un string
}

function CategorySelector({ setUrl }: CategorySelectorProps) {
  const listCategorys = [
    {
      name: "Disney",
      img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/FFA0BEBAC1406D88929497501C84019EBBA1B018D3F7C4C3C829F1810A24AD6E/compose?format=webp&width=800",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217865-disney.mp4",
      url: "https://www.omdbapi.com/?apikey=b788dd94&s=disney",
    },
    {
      name: "Marvel",
      img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/C90088DCAB7EA558159C0A79E4839D46B5302B5521BAB1F76D2E807D9E2C6D9A/compose?format=webp&width=800",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2019/08/07/1565217799-marvel.mp4",
      url: "https://www.omdbapi.com/?apikey=b788dd94&s=marvel",
    },
    {
      name: "Star wars",
      img: "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/5A9416D67DC9595496B2666087596EE64DE379272051BB854157C0D938BE2C26/compose?format=webp&width=800",
      video:
        "https://vod-bgc-sa-east-1.media.dssott.com/bgui/ps01/disney/bgui/2020/12/17/1608229334-star-wars.mp4",
      url: "https://www.omdbapi.com/?apikey=b788dd94&s=starwars",
    },
    {
      name: "Terror",
      img: "https://images.squarespace-cdn.com/content/v1/5ea215f6e7101e64eee815d6/b74740d2-9450-408b-8903-b543c54b2581/sticktight_header_band-logo.png",
      video: "/fondoZombis.mp4",
      url: "https://www.omdbapi.com/?apikey=b788dd94&s=terror",
    },
  ];

  // Tipamos las referencias como un array de referencias a elementos HTMLVideoElement
  const videoRefs = useRef<(HTMLVideoElement | null)[]>(
    listCategorys.map(() => null)
  );

  // Funciones para manejar los eventos de mouse
  const handleonMouseEnter = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play(); // play() es válido porque sabemos que es un HTMLVideoElement
      videoRefs.current[index].style.opacity = "1";
    }
  };

  const handleonMouseLeave = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.pause(); // pause() también es válido ahora
      videoRefs.current[index]!.currentTime = 0; // Aseguramos que no es null con el operador '!'
      videoRefs.current[index].style.opacity = "0";
    }
  };

  return (
    <div className="flex gap-10 justify-center">
      {listCategorys.map((category, index) => (
        <div
          key={category.name}
          className="bg-[#0F014B] w-[250px] h-[141px] rounded-lg relative cursor-pointer justify-center items-center"
          onMouseEnter={() => handleonMouseEnter(index)}
          onMouseLeave={() => handleonMouseLeave(index)}
          onClick={() => setUrl(category.url)}
        >
          <video
            ref={(el) => (videoRefs.current[index] = el)} // Asignamos la referencia para cada video
            src={category.video}
            muted
            className="absolute rounded-lg opacity-0 transition-opacity duration-500 ease-in-out"
          ></video>
          <div className="absolute h-full w-full flex justify-center text-center items-center">
            <img
              src={category.img}
              alt={category.name}
              className=" rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategorySelector;
