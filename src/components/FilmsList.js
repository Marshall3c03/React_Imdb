import React from 'react';
import Film from '../components/Film';

const FilmsList = ({films}) => {

    const filmNodes = films.map((film) => {
        return(
            <li>
                <Film title={film.name} key={film.id}>
                {film.url}
                </Film>
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