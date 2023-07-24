import './App.css';
import {Navbar, Hero, Analitics, Card, Footer} from './components/';
import Newsletter from './components/Newsletter';


function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Hero />
        <Analitics />
        <Newsletter />
        <Card/>
        <Footer/>
    </div>
  );
}

export default App;
