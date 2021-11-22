import React from 'react';

const UpcomingFilmsButton = () => {

    const loadImdbWebpage = (event) => {
        event.preventDefault();
        window.location.href='https://www.imdb.com/calendar/?region=gb';
        }


    return (
        <button type="button" onClick={loadImdbWebpage}>
            View more upcoming releases >>
        </button>
    )
}

export default UpcomingFilmsButton