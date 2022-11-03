import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Navigation from './Components/Navigation';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/portfolio' element = {<Portfolio/>} />
      <Route path='/resume' element = {<Resume />} />
      <Route path='/contact' element = {<Contact />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
