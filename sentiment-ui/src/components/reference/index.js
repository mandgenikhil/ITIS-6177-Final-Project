import React from 'react'
import './index.css'

export default function Reference(props) {
    return (
        <section id="reference" className="hero is-medium is-link">
            <div className='columns'>
                <div className='column'>
                <div className="hero-body">
                <p  className="title is-size-2 is-family-sans-serif">
                    Code Reference
                </p>
                <p  className="subtitle is-size-3 is-family-sans-serif">
                    <br />
                    <a className='link-data' href="https://github.com/mandgenikhil/ITIS-6177-Final-Project.git">Github</a> <span className="icon">
                                            <i href className="fas fa-brands fa-github"></i>
                                        </span>
                </p>
                <p  className="subtitle is-size-3 is-family-sans-serif">
                    
                <a className='link-data' href="https://azure.microsoft.com/en-us/products/cognitive-services/language-service/">Azure</a> <span className="icon">
                                            <i href className="ml-3 fas fa-solid fa-cloud"></i>
                                        </span>
                </p>
                <p  className="subtitle is-size-3 is-family-sans-serif">
                    
                <a className='link-data' href="https://flask.palletsprojects.com/en/2.2.x/">Python-Flask</a> <span className="icon">
                                            <i href className="ml-3 fas fa-brands fa-python"></i>
                                        </span>
                </p>
                <p  className="subtitle is-size-3 is-family-sans-serif">
                    
                <a className='link-data' href="https://reactjs.org/">React JS</a> <span className="icon">
                                            <i href className="ml-3 fas fa-brands fa-react"></i>
                                        </span>
                </p>
                
                
            </div>
                </div>
                <div className='column'>
                </div>
            </div>
        </section>
    )
}
