import React from "react";

function VienEpisode (props){
    return(
        <>
        <div className="episodiocarta">
            <h3 className="episodiocarta-nombre">{props.name}</h3>
            <div className="piedepagina">
                <h3 className="episodiocarta-episodio">{props.episode}</h3>
                <p className="episodiocarta-fecha"><b>fecha de lanzamiento: </b>{props.air_date}</p>                
            </div>

        </div>
        </>
    )


}
export default VienEpisode