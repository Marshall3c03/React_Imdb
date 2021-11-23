import React, {useState} from 'react'

const FilmForm = ({onNewFilmSubmit}) => {

    let [title, setTitle] = useState("");
    let [url, setUrl] = useState("");

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value)
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newTitle = title;
        // console.log(title)
        const urlToAdd = url.trim();
        if (!newTitle || !urlToAdd){
            return
        }

        console.log(newTitle)
        onNewFilmSubmit({
            title: newTitle,
            url: urlToAdd
        });

        setTitle("");
        setUrl("");
    };
    

    return(
        <form class="form" onSubmit={handleFormSubmit}>
            <input 
            type="text" 
            placeholder="Film Title" 
            value={title}
            onChange={handleTitleChange}/>

            <input 
            type="text" 
            placeholder="Insert IMDB Url" 
            value={url}
            onChange={handleUrlChange}/>

            <input type="submit" value="Add Film"/>
        </form>
    );
}

export default FilmForm;