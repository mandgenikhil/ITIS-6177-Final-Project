import React from 'react'
import './index.css'

// const TYPING_SPEED = 300;
// const DELETING_SPEED = 100;

// class Typer extends React.Component {

//     state = {
//         text: '',
//         isDeleting: false,
//         loopNum: 0,
//         typingSpeed: TYPING_SPEED
//     }

//     componentDidMount() {
//         this.handleType();
//     }

//     handleType = () => {
//         const { dataText } = this.props;
//         const { isDeleting, loopNum, text, typingSpeed } = this.state;
//         const i = loopNum % dataText.length;
//         const fullText = dataText[i];

//         this.setState({
//             text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
//             typingSpeed: isDeleting ? DELETING_SPEED : TYPING_SPEED
//         });

//         if (!isDeleting && text === fullText) {
//             setTimeout(() => this.setState({ isDeleting: true }), 500);
//         } else if (isDeleting && text === '') {
//             this.setState({
//                 isDeleting: false,
//                 loopNum: loopNum + 1
//             });
//         }

//         setTimeout(this.handleType, typingSpeed);
//     };

//     render() {
//         return (
//             <h1 className='is-family-sans-serif is-size-4'>{this.props.heading}&nbsp;
//                 <span className='is-family-sans-serif btn'>{this.state.text}</span>
//                 <span id="cursor"></span>
//             </h1>
//         );
//     }
// }



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
