import React from 'react'
import { NavLink } from 'react-router-dom';

const menue = () => {
  return (
    <div>
      
      <nav>
        <NavLink to="/gallery" activeClassName="active">Gallery</NavLink>
        <NavLink to="/artists" activeClassName="active">Artists</NavLink>
        <NavLink to="/history" activeClassName="active">History</NavLink>
        <NavLink to="/stories" activeClassName="active">Stories</NavLink>
        <NavLink to="/themes" activeClassName="active">Themes</NavLink>
      </nav>

   

    </div>
  )
}

export default menue




