import React from 'react'
import { NavLink } from 'react-router-dom'

export default props => (
    <nav className=" navbar navbar-expand-lg  navbar-dark bg-primary">
        <div className="container">
            <NavLink className="navbar-brand" to="/"><i className='fa fa-calendar-check-o'></i>TodoApp </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse " id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/todo">Tarefas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">Sobre</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)