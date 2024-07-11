import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import ContactUs from "./ContactUs";
import AboutUs from "./AboutUs";
import {Products} from "./Products";
import SignUp from "./SignUp";
import {FrontendDeveloper} from "./Course-pages/FrontendDeveloper";
import {JavaDeveloper} from "./Course-pages/JavaDeveloper";
import {CyberThreatAnalyst} from "./Course-pages/CyberThreatAnalyst";
import {ReactJsDeveloper} from "./Course-pages/ReactJsDeveloper";
import { BusinessAnalyst } from "./Course-pages/BusinessAnalyst";
import { DataEngineer } from "./Course-pages/DataEngineer";
import { FinancialAnalyst } from "./Course-pages/FinancialAnalyst";
import { StaffingEngineer } from "./Course-pages/StaffingEngineer";
import { VerifyCertificate } from "./VerifyCertificate";
import Dashboard from "./UserDashboard";

const NavigationalRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/FrontendDeveloper" element={<FrontendDeveloper />} />
      <Route path="/JavaDeveloper" element={<JavaDeveloper />} />
      <Route path="/CyberThreatAnalyst" element={<CyberThreatAnalyst/>} />
      <Route path="/ReactJsDeveloper" element={<ReactJsDeveloper />} />
      <Route path="/businessanalyst" element={<BusinessAnalyst />} />
      <Route path="/dataengineer" element={<DataEngineer />} />
      <Route path="/financialanalyst" element={<FinancialAnalyst />} />
      <Route path="/staffingengineer" element={<StaffingEngineer />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/VerifyCertificate" element={<VerifyCertificate />} />
    </Routes>
  );
};

export default NavigationalRoutes;
