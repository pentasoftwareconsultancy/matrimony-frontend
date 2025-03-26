import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div>
    <nav className='main-nave'>
      <div class="aa">
        <img src="logo.webp" height={50}width={100}></img>
      </div>
      <ul class="ff">
        <li class="homered">
            <b> Find talent</b>
        </li>
        <li class="homered">
            <b> Inspiration</b>
        </li>
        <li class="homered">
            <b>Learn design</b>
        </li>
        <li class="homered">
           <b>Job</b>
        </li>
        <li class="homered">
        <b> Go Pro</b> 
       </li>
       <li class="sign">
         <b>Sign Up</b></li>
        
        <li class="login">
         <b>Log In</b></li>
       </ul>
       </nav>
       
       <div class="a">Over 3 million ready-to-work creative!</div><br></br>
       <div class="b">Work with the world's top<br></br> creative talent.</div><br></br>
       <div class="c">Connect with million of top-reted designers & agencies arount the world.</div>
       <div class="d">start hiring today</div>
       
     
    </div>
    
  )
}

export default Navbar;
