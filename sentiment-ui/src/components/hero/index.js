import React from 'react'
import './index.css'

export default function Hero(props) {
    return (
        <section id="home" className="hero is-medium is-link">
            <div className='columns'>
                <div className='column'>
                <div className="hero-body">
                <p className="title is-size-2 is-family-sans-serif">
                    Sentiment Analysis API tool<span ></span><text className='ml-1 is-size-6'></text>
                </p>
                <p className="subtitle is-size-5 is-family-sans-serif">
                by Nikhil Mandge  (SSID - 801200550)
                </p>
                <p className="subtitle is-size-6 is-family-sans-serif">Using MS azure congitive service for language managed service, we have integrated sentiment analysis from text classification in this application.</p>
                
            </div>
                </div>
                <div className='column'>
                </div>
            </div>
        </section>
    )
}
