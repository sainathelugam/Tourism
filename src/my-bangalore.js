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



class MyBangalore extends PolymerElement {
    static get template() {
        return html `

        <!--css-->
      <style include="shared-styles">
     
        
        
        .single-product{
            margin-top: 80px;
        
        }
        .single-product .col-2 img{
            padding:10px;
            position: relative;
             left:50px;
            
        }
        .single-product .col-2{
            padding:10px;
            position: relative;
             right:50px;
             top:20px;
            
        }
        
        .single-product h3{
            margin: 20px 0;
            font-size: 22px;
            font-weight: bold;
        
        }
        
        /**title */
        .content-title{
            margin-left:50px;
        }

/**navbar css */
.wrapper {
  height: 65px;
  display: flex;
  align-items: center;
  justify-content:center;
  background-color: green;
}

nav {
  display: flex;
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
}

@media (max-width: 768px) {
  a.logo {
    margin: 1.5em;
  }
  
  ul {
    flex-direction: column;
  }
  
  ul li {
    margin: -0.5em;
    text-align: center;
  }
  
  ul li a {
    margin-left: 0px;
  }
}
    
/*buttons*/
.btn {
    margin:20px;
    font-size:15px;
    
   
	color: #fff;

    background-color: #24a0ed ; 
    border: none;
    border-radius: .3em;
    font-weight: bold;
   
}
        
      </style>

<!----css for iron image---->
<custom-style>
  <style is="custom-style">
    .img {
      width: 350px;
      height: 350px;
      right:-3%;
    
    }
  </style>
</custom-style>


  <!----app location---->
  <app-location route="{{route}}"></app-location>
<!---navbar-->
<div class="wrapper">
  <nav>
    <a href="#" class="logo">South India Tourism</a>
    
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
  </nav>

  </div>

      
      <center>
      <h1>Bangalore</h1>
      <div class="small-container single-product">
      <div class="row">
          <div class="col-2">
          
          <!---iron image is for adding image--->
          <iron-image sizing="contain" class="img" alt="The Polymer logo." src="../images/mahabali.jpg"></iron-image>
            </div>

             <!---About Bangalore--->
              <div class="col-2">
             
                  <h3 style="text-align:center;">About Bangalore</h3>
                  
                  <div class="content-title">
                  <p>Karnataka, the land of ultimate natural beauty and rich cultural heritage is situated in the Southern India, bounded by Maharashtra and Goa in the north, Andhra Pradesh on the east and Tamil Nadu and Kerala on the south. The western coast of the state is splashed by Arabian Sea, which is dotted with picturesque beaches. Karnataka is blessed with the lush green Western Ghats, roaring Jog waterfalls, densely forested Sahayadri, and the rich wildlife sanctuaries like Nagarhole and Bandipur. Apart from its awe-inspiring natural beauty, majestic architecture, and pilgrimage sties, Karnataka is also renowned for its software industry, Carnatic music, and the exciting festivals that make it one of the most celebrated states in India.

                  </p>
                  </div>

              </div>

          
      </center>
   
      <paper-button raised class="btn" on-click="handleClick"><b>Back</b></paper-button>
    `;

    }

    /**for route path of the linking page */
    handleClick() {
        this.set('route.path', '/sites');
    }

}

window.customElements.define('my-bangalore', MyBangalore);