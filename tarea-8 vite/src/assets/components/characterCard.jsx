import React from 'react';
import Title from './titulo';
import Image from './imagenes';
import Details from './details';




function CharacterCard(props) {
    

    // Recuerda que este es un componente funcional,
    // tu debes incluier estilos para que se vea mas atractivo

    return (
        <div className='bode'>
            {/* nombre del personaje */}
            <Title title={props.name}/>
            {/* Imagen del personaje */}
            <Image url={props.image} />
            {/* Detalles del personaje */ }
            <Details
            genero={props.genero}
            status={props.status}

            />

        </div>

   );
}
export default CharacterCard;