import React from 'react';
import './Navbar.css' 



function Navbar() {
   
    return (
        
   <header>
 <nav className="navbar navbar-expand-lg navbar-white static-top">

 
 <ul className="navbar-nav ml-auto">
        <ol className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="acceuil.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Acceuil
          </a>
         
        </ol>
        <ol className="nav-item">
          <a className="nav-link" href="equipe.html">Equipe</a>
        </ol>
        <ol className="nav-item">
          
            <img  className="im2" src="https://www.farojob.net/wp-content/uploads/2019/12/Simplon-Tunisie-Polygone-scaled.png" alt="logo" >
          
        </img></ol>
        
        <ol className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="a propos.html" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            A propos
          </a>
        
        </ol>
        <lo className="nav-item">
          <a className="nav-link" href="contac.html">Contact</a>
        </lo>
       
      </ul>             
          
     
    </nav>
   </header>
    );
  }
export default Navbar;
  