import React from 'react';

import './App.css'
import RickAndMortyCharacterCard from './assets/components/RickAndMortycharacterCard';


function App() {
  return (
    
    <div>
      <div className="image-container">
      <img src="./images.jpeg" alt="Personajes de Rick and Morty" />

    </div>
      <div className='titulo'>
        <h3> Personajes de Rick and Morty</h3></div>
        <div className='border'>

       <RickAndMortyCharacterCard id={1} /> 
       <RickAndMortyCharacterCard id={2} />
       <RickAndMortyCharacterCard id={3} />
       <RickAndMortyCharacterCard id={4} />
       <RickAndMortyCharacterCard id={10} />



        </div>

      
    </div>



);

}

export default App;