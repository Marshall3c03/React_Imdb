import React from 'react';

const Film = ({title, url}) => {
    return(
        <p class="film"> 
            <a  href={url}>{title}</a>
        </p>
    )
}

export default Film;