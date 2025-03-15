import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./commponents/LoginPage";
import Register from "./commponents/Register";
import WelcomePage from "./commponents/WelcomePage";
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route redirects to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcomepage" element={<WelcomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
