import logo from './logo.svg';
import './App.css';
import Alldata from './componants/Alldata';
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './componants/Header';
import { Know_more } from './componants/Know_more';
import { Foot } from './componants/Foot';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Alldata />} />
        <Route path="/:id" element={<Know_more />} />
        <Route path="/Foot" element={<Foot />} />
       
      </Routes>
    </div>
  );
}

export default App;
