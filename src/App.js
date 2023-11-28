import "./App.css";
import Navbar from "./components/navbar"; 
import HeroSection from "./components/HeroSection";
import Section from "./components/Section";
import { useState,useEffect } from "react";
import FilterSection from "./components/FilterSection";
import axios from 'axios';
import FAQ from "./components/FAQ";

const endPoint='https://qtify-backend-labs.crio.do/'

function App() {

  const [topAlbums,setTopAlbums]=useState([]);
  const [newAlbums,setnewAlbums]=useState([]);
  const [songs,setSongs]=useState([]);
  const [zoners,setZoners]=useState([]);
  const [filteredSongs,setFilteredSongs]=useState([]);

  useEffect(()=>{
    axios.get(`${endPoint}albums/top`)
      .then(({data})=>{
        setTopAlbums(data);
      })

    axios.get(`${endPoint}albums/new`)
    .then((res)=>{
      setnewAlbums(res.data);
    })
    axios.get(`${endPoint}songs`)
    .then((res)=>{
      setSongs(res.data);
      setFilteredSongs(res.data);
    })
    axios.get(`${endPoint}genres`)
    .then((res)=>{
      setZoners([{"key":"all","label":"All"},...res.data.data]);
    })
     // fetch(`${endPoint}albums/top`)
    // .then(res=>res.json())
    // .then(data => setTopAlbums(data))
    
    // fetch(`${endPoint}albums/new`)
    // .then(res=>res.json())
    // .then(data => setnewAlbums(data))

   

  },[])

  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Section navId='ta' title='Top Albums' data={topAlbums}/>
      <Section navId='na' title='New Albums' data={newAlbums}/>
      <FilterSection title='Songs' data={filteredSongs} filters={zoners}
        executeFilter={(genre)=>{
          if(genre==='all'){
            setFilteredSongs(songs);
          }else{
            setFilteredSongs(songs.filter(song=>song.genre.key===genre))
          }
        }}
      />
      <FAQ/>

    </div>
  );
}

export default App;
