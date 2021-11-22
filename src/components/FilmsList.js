import React from 'react';
import Film from '../components/Film';

const FilmsList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
            <li>
                <Film title={film.title} key={film.id} url={film.url}></Film>
            </li>
            
        )
    })

    
    return(
        <>
        <ul>
            {filmNodes}
        </ul>
        </>
    )
}

export default FilmsList;