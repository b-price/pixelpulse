
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import {Container} from "react-bootstrap";
import MainPage from "./components/MainPage.jsx";
import SettingsPage from "./components/SettingsPage.jsx";
import TopBar from "./components/TopBar.jsx";

function App() {


  return (
    <div className="h-100">
        {/*<Container>*/}
            <Router>
                <TopBar />
                <Routes>
                    <Route exact path="/" element={<MainPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </Router>
        {/*</Container>*/}
    </div>
  )
}

export default App
