import React, { useEffect, useState } from 'react';
import CharacterCard from './characterCard';

const RickAndMortyCharacterCard = () => {
    //const [charactersList, setCharactersList] = useState([]);
    const [characterList, setCharacterList] = useState([]);
    
    // const [name, setName] = useState("");
    // const [image, setImage] = useState("");
    // const [genero, setGenero] = useState("");
    // const [status, setStatus] = useState("");

   // const RickAndMortyCharacterId = props.id;

    useEffect(() => {
        // useEffect se ejecutará una única vez cuando el componente se monte
        fetch("https://rickandmortyapi.com/api/character/?page=1")


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
    }, []); // Dependencia para actualizar si `RickAndMortyCharacterId` cambia

    return (
        <div className='container-1'>
            {
                characterList.map((characters)=>(
                <div> 
                <CharacterCard
                name={characters.name}
                image={characters.image}
                genero={characters.gender}
                status={characters.status}
            />

                    </div>
                ))
            }

           
        </div>
    );
}

export default RickAndMortyCharacterCard;
