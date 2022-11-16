import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Hero from './components/hero';
import Demo from './components/demo';
import Reference from './components/reference';

function App() {
  return (
    <div >
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
      <Header />
      <Hero />
      <Demo />
      <Reference />
      <Footer />
    </div>
  );
}

export default App;
