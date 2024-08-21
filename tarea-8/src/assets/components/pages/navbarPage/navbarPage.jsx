import React from 'react'
import { Link } from "react-router-dom";

const NavbarComponents = () => {
  return (
    <div>
        <ul>
            <li className='links'>
                <Link href="/">Home </Link>
                <Link to="/characters">
                <div>Go to characters</div>
            </Link>
                <Link to="/episodes">Ir a Episodios</Link>
                
            </li>
        </ul>
    </div>
  )
}

export default NavbarComponents