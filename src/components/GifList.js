import React from "react";

function GifList({ gifs }) {
    return (
        <ul>
            {gifs.map(gif => {
                return <li key={gif.id}><img alt={gif.title} src={gif.images.original.url}></img></li>
            })}
        </ul>
    )
}

export default GifList