import { useEffect, useState } from "react"
import { getAllMovies } from "../../utils"
import Movie from "./Movie"

function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getAllMovies()
            // .then(({data:moviesFromInterface}) => setMovies(moviesFromInterface))
            .then(({data:moviesFromInterface}) => setMovies(moviesFromInterface.slice(0,10)))

    }, [])


    return (
        <div style={{ border: "3px solid red", width: "50%", margin: 'auto', textAlign: "center" }}>
            <h2>Movies</h2> <br />
            {movies && (movies.map((movie,index)=>{
                return (<Movie key={movie.id} movieId={movie.id}/>)
            }))}
        </div>
    )
}

export default Movies