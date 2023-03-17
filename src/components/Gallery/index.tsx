import { useState } from "react"
import { movies } from "./data"
import './style.css'
export function Gallery() {
    const [filme, setFilme] = useState(0)
    let movie = movies[filme]
    return (
        <>
            <section>
                <h1>{movie.title}</h1>
            </section>  
            <section className="gallery">
                <img src={movie.images.poster} />
            </section>
            <button onClick={() => setFilme(filme > 0? filme - 1 : filme)} className="gallery-btn red">Anterior</button>
            <button onClick={() => setFilme(filme < 14? filme + 1 : filme)} className="gallery-btn blue">Próxima</button>
        </>
    )
}
