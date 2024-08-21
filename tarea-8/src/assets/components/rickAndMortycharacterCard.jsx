import React, { useEffect, useState } from 'react';
import CharacterCard from './characterCard';
import { useLocation, useNavigate } from 'react-router-dom';

const RickAndMortyCharacterCard = () => {
    //const [charactersList, setCharactersList] = useState([]);
    const [characterList, setCharacterList] = useState([]);
    const [nameFilter, setNameFilter] = useState('')
    
   const ubicacion = useLocation()
   const navegacion =useNavigate()
   const parametrosBusqueda =new URLSearchParams(ubicacion.search);
   const nombre =parametrosBusqueda.get('name') || ''

    useEffect(() => {
        // useEffect se ejecutará una única vez cuando el componente se monte
        fetch("https://rickandmortyapi.com/api/character/?page=1&name="+nombre)


            .then((response) => response.json())
            .then((result) => {
                console.log(result)
                setCharacterList(result.results)
                
                
                setName(result.name);
                setImage(result.image);
                setGenero(result.gender);
                setStatus(result.status);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, [nombre]); // Dependencia para actualizar si `RickAndMortyCharacterId` cambia

            const manejoBusqueda = ()=>{
                navegacion(`?name=${nameFilter}`)
            }

    return (
        <div className='container-1'>
         <div className="search-bar">
                <input type="text" id='searchInput' placeholder='Search...' value={nameFilter} onChange={(e) => setNameFilter(e.target.value)} className="search-bar-input" />
                <button type="button" onClick={manejoBusqueda} className="search-bar-button">Search</button>
            </div>
            {
                characterList.map((characters)=>(
                <div> 
                <CharacterCard
                name={characters.name}
                image={characters.image}
                gender={characters.gender}
                status={characters.status}
            />

                    </div>
                ))
            }

           
        </div>
    );
}

export default RickAndMortyCharacterCard;
