import styles from "../css/Card.module.css";
import { Link } from "react-router-dom";

export function Card({ movie }) {//recibimos la data mediante el prop {movie} 
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;//agregamos la imagen segun la data
  return (
    <li className={styles.card}>
      <Link to={"/movies/" + movie.id}>
        <img
          width={230}
          height={345}
          className={styles.cardImage}
          src={imageUrl}
          alt={movie.title}
        />
        <div className={styles.title}>{movie.title}</div>
      </Link>
    </li>
  );
}
