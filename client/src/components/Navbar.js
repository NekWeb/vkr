import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from '../context/AuthContext'

export const Navbar = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const logoutHandler = event => {
    event.preventDefault()
    auth.logout()
    history.push('/')
  }

  return (
    <nav>
      <div className="nav-wrapper blue-grey darken-4" style={{ padding: '0 2rem' }}>
        <span className="brand-logo">BeatsMarket</span>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/upload">Загрузить</NavLink></li>
          <li><NavLink to="/tracks">Треки</NavLink></li>
          <li><NavLink to="/subsribe">Подписка</NavLink></li>
          <li><NavLink to="/faq">F.A.Q</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </ul>
      </div>
    </nav>
  )
}
