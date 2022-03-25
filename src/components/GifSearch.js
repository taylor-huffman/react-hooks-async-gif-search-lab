import React, { useState } from "react";

function GifSearch({ handleSetSearchTerm }) {

    const [input, setInput] = useState('')

    function handleOnchange(e) {
        setInput(e.target.value)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        handleSetSearchTerm(input)
        setInput('')
    }

    return (
        <div style={{ marginBottom: '40px' }}>
            <h3>Enter a serach term:</h3>
            <form onSubmit={handleOnSubmit}>
                <input onChange={handleOnchange} type="text" value={input} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default GifSearch