import React from 'react'
import "./index.css"
const { useState } = React;

export default function Demo() {
    const [data, fetchResponse] = useState([]);
    const [isResponse, setResponse] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const onChangeHandler = event => {
        setInputValue(event.target.value);
    };
    function handleClick() {
        if (inputValue.length > 10) {
            fetch('http://localhost:3004/sentiment?text=' + inputValue, {
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
                .then((data) => fetchResponse(data)
                ).then((e) => setResponse(true));
        }
        else {
            alert("Please enter sentance with Min 10 characters")
        }
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

                        <div>
                            {isResponse ? <div className=''>
                                <p className="title is-size-2 is-family-sans-serif">Result!</p>
                                <p className="subtitle is-size-2 is-family-sans-serif">Sentiment is <text className='is-uppercase'>{data['document_sentiment']['overall_sentiment']}</text></p>

                                <div className='columns has-text-centered'>

                                    <div className='column'>
                                        <p className="title is-size-5 is-family-sans-serif ">Positive</p>
                                        <span className="icon is-success">
                                            <i className="fas fa-smile is-size-1 positive_ic"><span className='ml-3 is-size-3'>{data['document_sentiment']['positive']}%</span></i>
                                        </span>

                                    </div>
                                    <div className='column'>
                                        <p className="title is-size-5 is-family-sans-serif ">Neutral</p>
                                        <span className="icon">
                                            <i className="fas fa-meh is-size-1 neutral_ic"><span className='ml-3 is-size-3'>{data['document_sentiment']['neutral']}%</span></i>
                                        </span>

                                    </div>
                                    <div className='column'>
                                        <p className="title is-size-5 is-family-sans-serif ">Negative</p>
                                        <span className="icon">
                                            <i className="fas fa-frown is-size-1 negative_ic"><span className='ml-3 is-size-3'>{data['document_sentiment']['negative']}%</span></i>
                                        </span>

                                    </div>
                                </div>




                                {/* data.map((obj, index) => {
                                return (
                                    <div>
                                    <p >
                                    {obj["document_sentiment"]["overall_sentiment"]}
                                    </p>
                                    <p >
                                    {obj["document_sentiment"]["negative"]}
                                    </p>
                                    <p >
                                    {obj["document_sentiment"]["positive"]}
                                    </p>
                                    <p >
                                    {obj["document_sentiment"]["neutral"]}
                                    </p>
                                    </div>
                        
                        );
                            }) */}
                            </div> : null}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
