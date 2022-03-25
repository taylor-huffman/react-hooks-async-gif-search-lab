import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {

    const [gifs, setGifs] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    function handleSetSearchTerm(search) {
        setSearchTerm(search)
    }

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=LU56ZnsoJ1lbnYIqsxnnoD4LODTizpNY&rating=g&limit=3`)
        .then(r => r.json())
        .then(gifs => setGifs(gifs.data))
    }, [searchTerm])

    return (
        <div className="container">
            <GifSearch handleSetSearchTerm={handleSetSearchTerm} />
            <GifList gifs={gifs} />
        </div>
    )
}

export default GifListContainer