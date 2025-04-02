import { useState, useEffect } from "react"
import { getMovieById } from "../../utils"

function Movie({ movieId }) {
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getMovieById(movieId)
            .then(({ data: movieInfo }) => {debugger; setMovie(movieInfo) })

    }, [movieId])


    return (movie && (
        <>
            <div style={{ border: "4px solid blue", width: "70%", textAlign: "center" }}>
                Name: {movie.name} <br /><br />
                <img  src={movie.image?.medium}/><br /><br />
            </div>
            <br />
        </>
    ))
}

export default Movie