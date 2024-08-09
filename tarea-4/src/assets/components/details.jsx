import React from 'react'

const Details = (props) => {
  return (
    <div>
       <p className='sobre'>
            <b>Genero:</b>  {props.genero}

       </p>
       <p className='sobre2'>
        <b>Estado:</b>  {props.status}
        </p>

    </div>
  )
}

export default Details
