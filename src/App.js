import "./App.css";
import Navbar from "./components/navbar"; 
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Card/>

    </div>
  );
}

export default App;
