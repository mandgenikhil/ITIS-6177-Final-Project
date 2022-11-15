import React from 'react'
import "./index.css"
const { useState, useEffect } = React;

export default function Demo() {
    const [data, fetchResponse] = useState([]);
    const [isResponse, setResponse] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const onChangeHandler = event => {
    setInputValue(event.target.value);
    };
    function handleClick() {
        fetch('http://localhost:3001/sentiment?text='+inputValue, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
            .then((response) => response.json())
            .then((data) => fetchResponse([data])
            ).then((e) => setResponse(true));
    }

    return (

        <section id="demo" className="hero is-medium is-link">
            <div className='columns'>
                <div className='column'>
                    <div className="hero-body">
                        <p className="title is-size-2 is-family-sans-serif">Try it out!</p>
                        <br />
                        <p class="subtitle is-family-sans-serif has-text-white">Enter your text here</p>
                        <textarea class="textarea" placeholder="Type your text here" onChange={onChangeHandler}  ></textarea>
                        <br />
                        <a href className='button btn is-family-code' onClick={() => handleClick()}>Send</a>
                        <br />
                        <br />
                        <br />
                        {isResponse ? <p className="title is-size-2 is-family-sans-serif">Result!</p> : null}
                        <div>
                            {isResponse ? data.map((obj, index) => {
                                return (
                                    <p key={obj.id}>
                                        {obj.title} - {obj.description}
                                    </p>
                        
                        );
                            }) : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
