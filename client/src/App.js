import { Routes, Route } from "react-router-dom";
import Home from "./Components/Content/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js";
import "./App.css";
import About from "./Components/Content/About/AboutUs.js";
import Contact from "./Components/Content/Contact/Contact.js";
import Signup from "./Components/Content/Signup/Signup.js";
import Shop from "./Components/Content/Shop/Shop.js";
import Footer from "./Components/Footer/footer";
// import Veg_sell from "./Components/Content/Sell_form/veg_sell_from.js";
// import User_profile from "./Components/User_profile/User_profile.js";
 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/contact-us" element={<Contact />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/shop" element={<Shop />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
