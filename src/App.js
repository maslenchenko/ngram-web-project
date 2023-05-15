// import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Predict from "./pages/predict";
import About from './pages/about';
import Team from './pages/team';
import Contact from './pages/contact';
import Analysis from './pages/analysis';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={Predict()} />
          <Route path="/about" element={About()} />
          <Route path="/team" element={Team()} />
          <Route path="/contact" element={Contact()} />
          <Route path="/analysis" element={Analysis()} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
