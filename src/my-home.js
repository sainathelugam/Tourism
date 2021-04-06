/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-image/iron-image.js';



class MyHome extends PolymerElement {
    static get template() {
        return html `

        <!----css---->
        
      <style include="shared-styles">
        
        
       
        
        .log{
          background:url(../images/t.jpg)no-repeat;
        
          background-size: cover;
          padding:18%;
          border-radius:10px;
         
          object-fit: fill;
          }

        /**button */

        .btn{
          position: absolute;
    top: 68%;
    right: 42%;
    
    border-radius: 15px;
    color: white;
    background-color: #3494E6;
    text-transform: uppercase;
    padding: 10px;
    font-weight: bold;
}
         
/*  content   */
 p{
     font-family:  sans-serif;
     color: black;
    
      margin-left:50px;
      margin-right:50px;
  
           
}

/**button hover */
.btn:hover{
  background: green;
}


/**navbar css */
.wrapper {
  height: 65px;
  display: flex;
  align-items: center;
  justify-content:center; /**The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally). */
  background-color: green;
}

nav {
  display: flex;/**The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning. */
  width: 90%;
}

ul li a {
  margin-left: 1.5em;
}

.logo {
  margin-right: auto;
   color:Lightgreen;
  text-decoration:none !important;
  margin-top:10px;
}
ul {
  display: flex;
  list-style: none;
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
  color: #ffffff;
  position: relative;
  font-size: 1.25em;
}

a::after {
  content:"";
  top: 80%;
  border-bottom: 2px solid #F8E71C;
  transition: all 0.35s;
  position: absolute;
}

a:hover::after {
  transition: all 0.35s;
}

a::after {
  right: 50%;
  left: 50%;
}

a:hover::after {
  right: 0;
  left: 0;
}

@media (max-width: 1024px) {
  .wrapper {
    height: auto;
  }
  
  nav {
    flex-direction: column;
    align-items: center;
  }
  
  a.logo {
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    margin-right: 0px;
  }
  
  ul {
    width: 100%;
    margin-bottom: 1em;
    justify-content: flex-start;
  }
  
  ul li a {
    margin-left: 0px;
  }
  .btn{
    top:60%;
    right:20%;
  }
}

@media (max-width: 768px) {
  a.logo {
    margin: 1.5em;
    width:100%;
    
  }
 
  .navmenu {
    
    flex-direction:flex-end;
  }
  ul {
    
    flex-direction: column;
  }
  
  ul li {
    display:flex;
    margin: -0.5em;
    text-align: center;
    flex-direction: column;
  }
  
  ul li a {
    margin-left: 0px;
  }
  .btn{
           
           top: 82%;
          right: 20%;
         }
         ul {
          display: flex;
flex-direction: column;
}
        
}


           
      
          
 </style>

      <!----app location---->
     <app-location route="{{route}}"></app-location>
     <!---navbar--->
     <div class="wrapper">
  <nav>
    <a href="#" class="logo">South India Tourism</a>
    <div class="navmenu">
    <ul>
      <li>
      <a name="home" href="[[rootPath]]home"><paper-button >Home</paper-button></a>
      </li>
      <li>
      <a name="booking" href="[[rootPath]]booking"><paper-button >Tourist Booking</paper-button></a>
      </li>
      <li>
      <a name="sites" href="[[rootPath]]sites"><paper-button >Sites to Visit</paper-button></a>
      </li>
      <li>
      <a name="dashboard" href="[[rootPath]]dashboard"><paper-button >Dashboard</paper-button></a>
      </li>
      <li>
      <a name="logout" href="[[rootPath]]login"><paper-button >logout</paper-button></a>
      </li>
    </ul>
    </div>
  </nav>

  </div>  
            
      <div class="log">
      
      <!--iron image for adding image--->
     <iron-image sizing="contain" class="img" alt="The Polymer logo." src="../images/img1.jpg" ></iron-image></div>
     

      
  
    <p>This popular tourist destination in South India also has some very well reputed Ayurvedic spas and wellness centres. 4. Coorg, Karnataka - The Scotland of India Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is the place to be for all nature lovers.The region spreads over an area of 635,780 Sq Km and comprises the states of Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana, and Puducherry. It also covers the verdant Union Territory of Andaman and Nicobar Islands. Karnataka is a coastal belt rich with Hindu traditions and natural beauty. It is home to forests like Bandipur and Nagarhole. The most famous hill station in the state is Coorg where aromatic spices and coffee plantations charm tourists immensely.</p> 

       
      
      
     

    `;

    }

    /**for route path of the linking page */
    handleClick() {
        this.set('route.path', '/booking');
    }

}

window.customElements.define('my-home', MyHome);