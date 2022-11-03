import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
        <div class = "fdiv">
            <div class = "main1">
                <div id = "name">Arpana kashyap</div>
            </div>
            <div id = "nav">
                <nav>
                    <NavLink to='/' className= "hommie">Home</NavLink>
                    <NavLink to='/about' className= "hommie">About</NavLink>
                    <NavLink to='/portfolio' className= "hommie">Portfolio</NavLink>
                    <NavLink to='/resume' className= "hommie">Resume</NavLink>
                    <NavLink to='/contact' className= "hommie">Contact</NavLink>
                </nav>
            </div>
        </div>

    </div>
  )
}

export default Navigation