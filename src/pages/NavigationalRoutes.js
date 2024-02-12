import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import {Products} from "./Products";
import SignUp from "./SignUp"
import {ArtificialIntelligence} from "./Course-pages/ArtificialIntelligence";
import {CoreJava} from "./Course-pages/CoreJava";
import {Python} from "./Course-pages/Python";
import {WebDevelopment} from "./Course-pages/WebDevelopment";

const NavigationalRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/artificialintelligence" element={<ArtificialIntelligence />} />
      <Route path="/corejava" element={<CoreJava />} />
      <Route path="/programminginpython" element={<Python/>} />
      <Route path="/webdevelopment" element={<WebDevelopment />} />
    </Routes>
  );
};

export default NavigationalRoutes;
