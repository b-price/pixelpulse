
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import MainPage from "./components/MainPage.jsx";
import SettingsPage from "./components/SettingsPage.jsx";
import TopBar from "./components/TopBar.jsx";
import HighScoresPage from "./components/HighScoresPage.jsx";

//TODO: Add private route for MainPage after Login is implemented
function App() {

  return (
    <Router>
        <TopBar />
        <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/highscores" element={<HighScoresPage />} />
        </Routes>
    </Router>
  )
}

export default App
