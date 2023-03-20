import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Components/Content/context/AuthorizationContext.js";

import Home from "./Components/Content/Home/Home.js";
import Navbar from "./Components/Navbar/Navbar.js";
import "./App.css";
import About from "./Components/Content/About/AboutUs.js";
import Signup from "./Components/Content/Signup/Signup.js";
import SignIn from "./Components/Content/Signup/SignIn.js";
import ResetPassword from "./Components/Content/Signup/ResetPassword";
import Shop from "./Components/Content/Shop/Shop.js";
import Footer from "./Components/Footer/footer";
import Renting from "./Components/Content/Rent/Renting.js";
import Contact from "./Components/Content/Contact/Contact.js";
import UserProfile from "./Components/User_profile/User_profile";
import Veg_Sell from "./Components/Content/Sell_form/veg_sell_from";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about-us" element={<About />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route
            exact
            path="/signin/resetpassword"
            element={<ResetPassword />}
          />
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/rent" element={<Renting />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/sell" element={<Veg_Sell />} />
          <Route exact path="/userProfile" element={<UserProfile />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
