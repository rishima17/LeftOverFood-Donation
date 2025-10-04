import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import RoleSelect from "./components/RoleSelect";
import DonorDashboard from "./components/DonorDashboard";
import RequesterDashboard from "./components/RequesterDashboard";
import DonorForm from "./components/DonorForm";
import RequestorForm from "./components/RequestorForm";
import ContactUs from "./components/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<ContactUs />} />

        {/* After login */}
        <Route path="/choose-role" element={<RoleSelect />} />
        <Route path="/donor-dashboard" element={<DonorDashboard />} />
        <Route path="/donor/home" element={<DonorForm />} />
        <Route path="/requester/home" element={<RequestorForm />} />
        <Route path="/requester-dashboard" element={<RequesterDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
