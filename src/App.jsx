import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VideoDetail from "./pages/VideoDetail";
import Search from "./pages/Search";
import Category from "./pages/Category";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/video/:id/:slug" element={<VideoDetail />} />
        <Route path="/search" element={<Search />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </Router>
  );
}

export default App;
