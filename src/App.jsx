import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VideoDetail from "./pages/VideoDetail";
import Search from "./pages/Search";
import Category from "./pages/Category";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from './pages/admin/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/video/:id/:slug" element={<VideoDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category" element={<Category />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/admin/dashboard" element={<Dashboard />} />

      </Routes>
    </Router>
  );
}

export default App;
