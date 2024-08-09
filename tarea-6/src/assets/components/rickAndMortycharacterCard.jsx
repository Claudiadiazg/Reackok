import React, { useEffect, useState } from 'react';
import CharacterCard from './characterCard';

const RickAndMortyCharacterCard = (props) => {
    
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [genero, setGenero] = useState("");
    const [status, setStatus] = useState("");

    const RickAndMortyCharacterId = props.id;

    useEffect(() => {
        // useEffect se ejecutará una única vez cuando el componente se monte
        fetch(`https://rickandmortyapi.com/api/character/${RickAndMortyCharacterId}`)

            .then((response) => response.json())
            .then((result) => {
                
                setName(result.name);
                setImage(result.image);
                setGenero(result.species);
                setStatus(result.status);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
            });
    }, []); // Dependencia para actualizar si `RickAndMortyCharacterId` cambia

    return (
        <div className='container'>
            <CharacterCard
                name={name}
                image={image}
                genero={genero}
                status={status}
            />
        </div>
    );
}

export default RickAndMortyCharacterCard;
