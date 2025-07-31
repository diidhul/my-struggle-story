// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ArticlePage from "./pages/ArticlePage";
import "./index.css";
import { ThemeProvider } from "./Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
