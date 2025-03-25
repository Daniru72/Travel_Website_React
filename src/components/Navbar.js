import { Component } from "react";
import "../style/navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component{
    render(){
        return(
            <nav className="navbarItems">
               <h1 className="navbar-logo">Trippy</h1>

                <div className="menu-icon">
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                   
                </div>

               <ul className="nav-menu">
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                           <a className={item.cName} href ="/">
                               <i className={item.icon}></i>
                               <span>{item.title}</span>
                           </a>
                        </li>
                    )
                })}

                <button>Signup</button>
                 
               </ul>
            </nav>
        );
    }
    
}

export default Navbar;