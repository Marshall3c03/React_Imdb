import React from 'react';

const Film = ({title, children}) => {
    return(
        <p>
            <a href={children}>{title}</a>
        </p>
    )
}

export default Film;