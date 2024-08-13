import React from "react";

function  Image(props){
    //  recuerda que esto es un componente funcional,
    // tu debes inlcuir estilos para hacerlo mas atractivo
    return  <div className='imf'><img src={props.url} alt="foto de el artista o personaje" /></div>;
   
}

export  default Image;
