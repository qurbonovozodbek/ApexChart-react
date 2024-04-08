import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import eur from '../assets/euro.png'
import uz from '../assets/uz.png'
import lir from '../assets/tur.png'
import rub from '../assets/rus.png'

function Layout() {
  return (
    <div className='container'>
      <h1>Money currencies</h1>
        <menu>
            <Outlet></Outlet>
        </menu>
        <footer>
          <div className="links">
            <NavLink to="/">EURO <img className='image' src={eur} alt="" /></NavLink>
            <NavLink to="/uzs">UZS <img className='image' src={uz} alt="" /></NavLink>
            <NavLink to="/lira">LIRA <img className='image' src={lir} alt="" /></NavLink>
            <NavLink to="/rub">RUB <img className='image' src={rub} alt="" /></NavLink>
          </div>
        </footer>
    </div>
  )
}

export default Layout