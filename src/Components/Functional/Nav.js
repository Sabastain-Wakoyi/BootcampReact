import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const baseUrl="http://localhost:8080"

export const NavBar = (props) => {
   


    
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top">
                <div className="container">
                    <a href="#" className="navbar-brand"><img src="https://www.snva.com/assets/img/img-logo/snvalogo.svg"></img></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navmenu">
                        <ul className="navbar-nav ms-auto">
                            {
                                props.items.map((item, index) => {
                                    return <li className="nav-item">
                                        <a href={item.href} className="nav-link">{item.text}</a>
                                        {/* <Link className="nav-link" to={item.href}>{item.text}</Link> */}
                                    </li>
                                })};
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}