import { LandingPage } from './pages/LandigPage';
import {MoviesDetails} from './pages/MovieDetails';
import styles from './css/App.module.css';
import {BrowserRouter as Router,Switch,Link,Route} from "react-router-dom";

export  function App(){
    return (
    <Router>
        <header >
            <Link to="/" >
                <h1 className={styles.title}>Movies</h1>
            </Link>
            
            
        </header>
        <main>
        
            <Switch>
            <Route exact path="/movies/:movieId">
                <MoviesDetails/>
            </Route>
            <Route path="/">
                <LandingPage/>
            </Route>
            
            </Switch>
        </main>
    </Router>
    )
}