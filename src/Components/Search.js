import styles from '../css/Search.module.css'
import { useState } from 'react';
import { useHistory } from 'react-router';

export function Search() {

    const [searchText, setSearchText] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/?search=" + searchText)
    }
    return (
        <div className={styles.search}>
            <form className="d-flex w-75" onSubmit={handleSubmit} >
                <input 
                    value={searchText} 
                    onChange={(e)=> setSearchText(e.target.value)} 
                    className="form-control me-sm" type="text" 
                    placeholder="search"/>
                <button className="btn btn-secondary  my-sm-0" type="submit" _msthash="727987" _msttexthash="79066">Search</button>

            </form>
        </div>
    );


}



/*<form className="d-flex" data-children-count="1">
        <input className="form-control me-sm-2" type="text" placeholder="buscar" _mstplaceholder="79066">
        <button className="btn btn-secondary my-2 my-sm-0" type="submit" _msthash="727987" _msttexthash="79066">buscar</button>
      </form>*/