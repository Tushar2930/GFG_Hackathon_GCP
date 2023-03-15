import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/Content/context/AuthorizationContext.js";

import Home from "./Components/Content/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js";
import "./App.css";
import About from "./Components/Content/About/AboutUs.js";
import Contact from "./Components/Content/Contact/Contact.js";
import Signup from "./Components/Content/Signup/Signup.js";
import SignIn from "./Components/Content/Signup/SignIn.js";
import Shop from "./Components/Content/Shop/Shop.js";
import Footer from "./Components/Footer/Footer.js";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/contact-us" element={<Contact />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/shop" element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
