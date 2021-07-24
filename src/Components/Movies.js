import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Card } from "./Card";
import { get } from "../utils/httpClient";
import styles from "../css/Movies.module.css";
import { Spinner } from "./Spinner";

function useQuery(){
  return new URLSearchParams(useLocation().search);
}

export function Movies() {
  const [movies, setMovies] = useState([]); //estado para llenar la data con la api de peliculas
  const [loading, setLoading] = useState(true); //estado de loading se apliacara si esque la data aun no esta llena

  const query = useQuery();
  const search = query.get("search") ;
  

  useEffect(() => {
    //Mnadamos el path para listar las peliculas
    const searchUrl = search
      ? "/search/movie?query="+ search
      : "/discover/movie";
    get(searchUrl).then((data) => {
      setMovies(data.results); //llenamos la data movies con la data de la api
      setLoading(false);
    });
  }, [search]);

  if (loading){
    return <Spinner/>
  }

  return (
    //renderizamos mediante el componente Card que creamos
    <ul className={styles.grid}>
      { 
        movies.map((movie) => <Card key={movie.id} movie={movie} />)
        //mapeamos la data segun el id de la pelicula enviamos la data al componnte hijo mediante props {movie}
      }
    </ul>
  );
}
