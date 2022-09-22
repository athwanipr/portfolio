
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Recommendation from './components/Recommendation';
import Login from './components/Login';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    
      <Navbar />
      <div className="container">
        <Routes>
          
          <Route exact path="/" element={<Login />}>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/skills" element={<Skills />}>
          </Route>
          <Route exact path="/experience" element={<Experience />}>
          </Route>
          <Route exact path="/contact" element={<Contact />}>
          </Route>
          <Route exact path="/recommendation" element={<Recommendation />}>
          </Route>
          

        </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
