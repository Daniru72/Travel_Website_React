import { Component } from "react";
import "../style/navbar.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component{

   state = {clicked : false};

   handleClick = () => {
         this.setState({clicked : !this.state.clicked});
   }

    render(){
        return(
            <nav className="navbarItems">
               <h1 className="navbar-logo">Trippy</h1>

                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                   
                </div>

               <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                {MenuItems.map((item, index) =>{
                    return(
                        <li key={index}>
                           <Link className={item.cName} to={item.url}>
                               <i className={item.icon}></i>
                               <span>{item.title}</span>
                           </Link>
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