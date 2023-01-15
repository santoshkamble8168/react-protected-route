import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages/Routes
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

import ProtectedRoute from "./util/ProtectedRoute";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          {/* Public Routes*/}
          <Route path="/" element={<Login/>} />

          {/* Protected Routes*/}
          <Route path="/" element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
