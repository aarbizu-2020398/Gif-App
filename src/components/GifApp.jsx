import { useGif } from "../hooks/useGif";
import { BuscarGif } from "./BuscarGif";
import { ContenedorGifs } from "./ContenedorGifs";

// Functional component
export const GifApp = () => {
    
    const { gifs, handleGetGif, nombreCategoria} = useGif();

    return (
        // Fragment
        <>

            <BuscarGif handleGetGif = {handleGetGif}/>
            <ContenedorGifs gifs ={gifs}/>
        </>
    );
}


