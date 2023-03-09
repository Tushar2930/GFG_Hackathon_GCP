import {Routes,Route, json,useParams} from "react-router-dom";
import Home from "./Components/Home"
import Navbar from "./Components/Navbar"
import './App.css';
import About from "./Components/AboutUs.js"
import Contact from "./Components/Contact.js"
import Blog from "./Components/Blog.js"
import Shop from "./Components/Shop.js"

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
     <Route exact path="/" element={<Home/>} />
     <Route exact path="/about-us" element={<About/>} />
     <Route exact path="/contact-us" element={<Contact/>} />
     <Route exact path="/blog" element={<Blog/>} />
     <Route exact path="/shop" element={<Shop/>} />
      </Routes>
    </div>
  );
}

export default App;
