import React from 'react'

const FilmForm = () => {
    return(
        <form>
            <input type="text" placeholder="Film Title"></input>
            <input type="text" placeholder="IMDB Url"></input>
            <input type="submit" value="Add Film"></input>
        </form>
    )
}


export default FilmForm;