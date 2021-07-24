import styles from "../css/MoviesDetails.module.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import {Spinner} from "../Components/Spinner"

export function MoviesDetails() {
  const { movieId } = useParams();//recibimos el id de la pelicula con el path dep router que creamos :movieId
  const [movie, setMovie] = useState(null);//creamos la data con estado nulo
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {//para obtener el detalle exacto de la pelicula a la cual ingresamos en este caso segun la api seria con el id que le pasamos mediante los params 
      setMovie(data);//llenamos nuestra data con la unica pelicla que hemos seleccionado
      setLoading(false);
    });
  }, [movieId]);//esto es para que se ejecute este efecto segun esta variable en este caso el id de la pelicula

  if(loading){
   return <Spinner/>
  }

  if (!movie) {//si es que aun no encontro el id no se cargara nada regresara un null
    return null;
  }
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path; //damos tamaño a la imagen 
  return (//kkenamos nuestro renderizdo con los datos recibidos de la api
    <div className={styles.detailsContainer}>
      <div className={styles.Screen2}>
       
      </div>
      <div className={styles.containerUpgrade}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}><strong>Title: </strong>{movie.title}</p>
        <p>
          <strong>Genres : </strong> 
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p><strong>Description : </strong>{movie.overview}</p>
      </div>

      </div>
    </div>
  );
}
