import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from './page/Team';
import Home from './page/Home';
import Courses from './page/Courses';
import Blogs from './page/Blogs';
import Contact from './page/Contact';
import Materials from './page/Materials';
import Selection from './page/Selection';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/team" element={<Team/>}></Route>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/courses" element={<Courses/>}></Route>
        <Route exact path="/blogs" element={<Blogs/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/materials" element={<Materials/>}></Route>
        <Route exact path="/selection" element={<Selection/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
