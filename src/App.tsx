// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import ArticlePage from "./assets/pages/ArticlePage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
