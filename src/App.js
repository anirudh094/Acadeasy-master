import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import NavigationalRoutes from "./pages/NavigationalRoutes";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer"
import WhatsAppBot from "./pages/WhatsAppBot";

function App() {
  return (
    <Router>
      <Navbar />
      <NavigationalRoutes />
      <Footer/>
      <WhatsAppBot/>
    </Router>
  );
}

export default App;






