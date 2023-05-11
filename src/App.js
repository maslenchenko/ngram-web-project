// import logo from './logo.svg';
import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Predict from "./pages/predict";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact component={Predict} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
