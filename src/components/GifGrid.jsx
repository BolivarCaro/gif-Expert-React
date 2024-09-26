
import { GifGridItem } from "./GifGridItem";
import { useEffectGifs } from "../hooks/useEffectGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useEffectGifs( category );

        return (
            <>
                <h3>{ category }</h3>
                {

                    isLoading && ( <h2>Cargando...</h2> )
                    
                }

                <div className="card-grid">

                    {
                         images.map(( image )  => (
                            <GifGridItem 
                                key={ image.id }
                                { ...image }
                            />
                         ))
                    }
                    
                </div>
            </>
        )
}
