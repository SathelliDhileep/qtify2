import "./App.css";
import Navbar from "./components/navbar"; 
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import Section from "./components/Section";
import { useState,useEffect } from "react";

const endPoint='https://qtify-backend-labs.crio.do/'

function App() {

  const [topAlbums,setTopAlbums]=useState([]);
  const [newAlbums,setnewAlbums]=useState([]);

  useEffect(()=>{
    fetch(`${endPoint}albums/top`)
    .then(res=>res.json())
    .then(data => setTopAlbums(data))
    
    fetch(`${endPoint}albums/new`)
    .then(res=>res.json())
    .then(data => setnewAlbums(data))

  },[])


  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Section title='Top Albums' data={topAlbums}/>
      <Section title='New Albums' data={newAlbums}/>

    </div>
  );
}

export default App;
