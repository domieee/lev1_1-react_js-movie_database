import './MovieData.css'

const MovieData = (movie) => {
    console.log(movie);
    return (
        <div className="frames">
            <p className="title">{movie.title}</p>
            <p className="year">{movie.year}</p>
            <p className="director">{movie.director}</p>
            <p className="duration">{movie.duration}</p>
            <p className="genre">{movie.genre}</p>
            <p className="rate">{movie.rate}</p>
        </div>
    );
}

export default MovieData;