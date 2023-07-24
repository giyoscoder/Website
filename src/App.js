import './App.css';
import {Navbar, Hero, Analitics, Card} from './components/';
import Newsletter from './components/Newsletter';


function App() {
  return (
    <div className='app'>
        <Navbar/>
        <Hero />
        <Analitics />
        <Newsletter />
        <Card/>
    </div>
  );
}

export default App;
