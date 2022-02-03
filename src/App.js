import "./App.css";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App(darkmode) {
  return (
    <Router>
      <div className="DarkApp">
        <Header />
        <Routes>
          <Route path="/" caseSensitive={false} element={<PieChart />} />
        </Routes>
        <Routes>
          <Route path="/line" caseSensitive={false} element={<LineChart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
