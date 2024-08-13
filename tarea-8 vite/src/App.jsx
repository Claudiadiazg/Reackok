import React from 'react'; // Importar hooks
//import CharacterCard from './assets/components/characterCard'; // Asegúrate de que la ruta es correcta
import RickAndMortyCharacterCard from './assets/components/rickAndMortycharacterCard';
import './App.css';

function App() {
  // // Paso 1: Definir la variable de estado
  // const [charactersList, setCharactersList] = useState([]);

  // // Paso 2: Llamada a la API
  // useEffect(() => {
  //   // Este useEffect se ejecutará una única vez cuando el componente se monte
  //   fetch("https://rickandmortyapi.com/api/character/?page=1")
  //     .then((response) => response.json()) // Corrección aquí
  //     .then((data) => {
  //       // Actualiza la variable de estado con los datos obtenidos
  //       setCharactersList(data.results);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []); // El array vacío asegura que se ejecute solo una vez

  return (
    <div>
      <RickAndMortyCharacterCard/>
    </div>
  //  // <div>
  //    // <div className="image-container">
  //     //  <img src="./images.jpeg" alt="Personajes de Rick and Morty" />
  //     </div>
  //     <div className='titulo'>
  //       <h3>Personajes de Rick and Morty</h3>
  //     </div>
  //     <div className='border'>
  //       {/* Renderizar la lista de personajes usando el componente RickAndMortyCharacterCard */}
  //       {charactersList.map((character) => (
  //         <RickAndMortyCharacterCard
  //           key={character.id} // Asegúrate de pasar una clave única
  //           id={character.id}
  //           name={character.name}
  //           image={character.image}
  //           genre={character.species} // Asumimos que 'genre' corresponde a 'species'
  //           status={character.status}
  //        // />
  //       ))}
  //     </div>
  //   </div>
  );
}

export default App;
