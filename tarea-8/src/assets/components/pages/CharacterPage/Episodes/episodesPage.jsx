import React, {useEffect, useState} from "react";
import VienEpisode from "./VienEpisode";


function EpisodesPage() {
  const [characterEpisodies, setCharacterEpisodies] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/episode")
      .then((response) => response.json())
      .then((data) => {
        setCharacterEpisodies(data.results);
        console.log(data.results, 'soy data');
        
        
      });
  }, []);

  return (
    <>
      <div className="titulo">
        <h1>Episodios de Rick and Morty</h1>
      </div>

      <div className="viewEpisode">
        {characterEpisodies.map((episodie) => (
            
            
            
           <VienEpisode
           name= {episodie.name}
           episode = {episodie.episode}
           air_date = {episodie.air_date}
           />

           ))}
      </div>
      
    </> 
  );
}

export default EpisodesPage;