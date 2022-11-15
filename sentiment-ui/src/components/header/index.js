// import React, { useState, useEffect } from 'react';
import React from 'react';
import "./index.css"


export default function Header() {
    return (
        <nav className="navbar navbar-color" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <p class="is-size-5 is-family-sans-serif">Sentiment Analysis Project</p>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start is-family-monospace">
                </div>

                <div className="navbar-end">
                        <a href="#demo" className="navbar-item is-family-monospace is-link">
                            Demo
                        </a>
                        <a href="#demo" className="navbar-item is-family-monospace">
                            Try it out
                        </a>
                        <a href="#refference" className="navbar-item is-family-monospace">
                            Refferece
                        </a>
                </div>
            </div>
        </nav>
    )
}
