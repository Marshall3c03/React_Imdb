import React, {useState} from 'react'

const FilmForm = () => {

    let [title, setTitle] = useState("");
    let [url, setUrl] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    }

    return(
        <form>
            <input 
            type="text" 
            placeholder="Film Title" 
            value={title}
            onChange={handleTitleChange}/>

            <input 
            type="text" 
            placeholder="IMDB Url" 
            value={url}
            onChange={handleUrlChange}/>

            <input type="submit" value="Add Film"/>
        </form>
    )
}


export default FilmForm;