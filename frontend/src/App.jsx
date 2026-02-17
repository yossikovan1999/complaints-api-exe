import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage"
import AdminComplaintsPage from "./pages/adminComplaintsPage/AdminComplaintsPage"
import AdminLoginPage from "./pages/adminLoginPage/AdminLoginPage"
import SubmitComplaintPage from "./pages/submitComplaintPage/SubmitComplaintPage"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<SubmitComplaintPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminComplaintsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
