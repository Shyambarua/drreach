import React from 'react';
import logo from './logo.png';
import './header.css';



const Header = () => {
  
  // toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = ()=>{

    let header = document.querySelector('header');
    
    header.classList.toggle('sticky' , window.scrollY>100);
    
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}
  
  return (
    <div>
      <header class="header">
        
        <a href="#" class="logo"><img src={logo} alt=""/>Dr. Reach</a>

        <i class='bx bx-menu' id="menu-icon"></i>
        
        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
        </nav>

        <button class="btn1">Login</button>
    </header>
    </div>
  );
}

export default Header;
