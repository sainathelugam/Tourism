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



class MyHyd extends PolymerElement {
    static get template() {
        return html `

        <!--css-->
      <style include="shared-styles">
       
        
        /**single course */
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
<!--navbar-->
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
      <h1>Hyderabad</h1>
      <div class="small-container single-product">
      <div class="row">
          <div class="col-2">
              
              
<!---iron image is for adding image--->
<iron-image sizing="contain" class="img" alt="The Polymer logo." src="../images/bddha.jpg"></iron-image>

            
            </div>

            <!---About Hyderabad--->
              <div class="col-2">
                 
              
              <h3 style="text-align:center;"><u>About Hyderabad</u></h3>
                  
                  <div class="content-title">
                  <p>
                  Hyderabad is the perfect city to cater to the dreams and wishes of a curious traveler. From charming markets, delectable cuisines and numerous places to explore, the city has a lot to offer. Located in the Indian state of Telangana, Hyderabad is a quintessential metropolitan city. The economy of the city continues to flourish with time, without compromising on the integrity and cultural heritage of the city. The rustic, narrow lanes and Nawabi architecture of the old city make it impossible to believe that you are in one of the most technologically progressive cities in India. \r\n\r\nAs you venture out to the other parts of Hyderabad and Secunderabad, you will be surprised with glitzy malls, swanky multiplexes and offices of more companies than you could count. A shopaholic’s paradise, Hyderabad is also known as ‘City of Pearls’ for being a historically famous pearl and diamond trading center. It is home to numerous historical places such as Charminar, Mecca Masjid, and Falaknuma Palace. Though it is popular for its ‘Hyderabadi biryani,' the city will amaze you with its varied cuisine, the quality of which is hard to match elsewhere. The city has attracted people belonging to various cultures, religions, and regions, each of whom contributes to the legacy of the city in their own way.
                  </p>
                  </div>

              </div>

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

window.customElements.define('my-hyd', MyHyd);