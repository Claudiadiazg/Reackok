import React from 'react';
import CharacterCard from './components/CharacterCard';

function App() {
  // Paso 1. 
  const [charactersList, setCharactersList] = useState([]);

  // Paso 2
  useEffect( () => {
        // Este useEffect se ejecutará una única vez cuando el componente se monte
        fetch("https://rickandmortyapi.com/api/character/?page=1")
        .then((response) => response.jsxon()).
        .then((data) => 
            // Acá podemos procesamos la respuesta de el endpoint
            console.log(data); // Resultado de el endpoint

            // Utiliza la variable data para actualizar la variable de estado de el paso 1
            setCharactersList(data.results);
        );
    }, [])  


  return (
    <div>
      <h1>Personajes de Rick and morty</h1>
      {/* 
        Paso 3. Uuando la variable creada en el paso 1, debes usar map para leer todos 
        personajes e ir agreando al doom el detalle de cáda uno usando el componenete 
        CharacterCard.jsx creado en la clase pasada. 
      */}
      <div>
        {
          charactersList.map( (characters) => (
            // TODO: usa el map para agregar al DOM el detalled e cada personaje 
            // usando el componente CharacterCard.jsx
            <CharacterCard 
              name={}
              image={}
              genre={}
              status={}
            >
          ))
        }
      </div>
      
      {/*
        OPCIONAL: Inclute un componenet de paginación y haz que la variable de el paso 1 
        se actualice dinamicamente con la información de cáda página
      */}
    </div>
  );
}

export default App;