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



class AllSites extends PolymerElement {
    static get template() {
            return html `

            <!---css--->
            <style is="custom-style">
             
             
      /*main display*/
      
      
      .label{
        text-align: center;
        font-size: 2.5em;
        font-family: 'Alegreya SC', serif;
        color: black;
          margin-top:80px;
      }
      .tourist{
        display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
      }
      
      /*individual item containers*/
      .about-item{
        margin: 0;
        padding: 20px;
      }
      .about-item-title {
          display: block;
          width: 100%;
          text-align: center;
          font-weight: bold;
          font-size: 1.5em;
          color: black;
        font-family: 'Kulim Park', sans-serif;
          margin-bottom: 15px;
      }
      .box{
        height: 100px;
        width: 100px;
      }
      
      .about-item-details {
          display: flex;
          align-items: center;
          padding: 5px;
        }
      /*buttons*/
      .btn {
          text-align: center;
          font-size:15px;
         
        color: #fff;
      
          background-color: #24a0ed ; 
          border: none;
          border-radius: .3em;
          font-weight: bold;
          width:150px;
      }
     
      
      /**navbar css */
      .wrapper {
        height: 65px;
        display: flex;
        align-items: center;
        justify-content:center;/**The justify-content property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally). */
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
      <!---iron image css-->
      <custom-style>
        <style is="custom-style">
          .shop-item-image {
             height: 200px;
        width: 200px;
          }
        </style>
      </custom-style>

  <!----app location---->
  <app-location route="{{route}}"></app-location>
<!---navbar--->
<div class="wrapper">
  <nav>
    <a href="#" class="logo">South India Toursim</a>
    
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

      <!---heading--->
      <div class="main-display">
      
      <h1 class="label">Sites to Visit</h1>

      <!----Tourist  place Hyderabad---->
      <div class="tourist">
          <div class="about-item">
              <span class="about-item-title"><u>Hyderabad</u></span>
              <div class="box">

              <!--iron image for adding image--->
              <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/bddha.jpg"></iron-image>
   
              </div>
              <br><br><br><br><br>
              
              <!---paper button is for adding a button--->    
              <paper-button raised class="btn" on-click="handleClick"><b>Visit site</b></paper-button>
              
          </div>


          <!---Tourist  place Chennai----->
          <div class="about-item">
              <span class="about-item-title"><u>Chennai</u></span>
              <div class="box">
                 <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/Chennai (1).jpg"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
                <!---paper button is for adding a button---> 
              <paper-button raised class="btn" on-click="handleClick2"><b>Visit site</b></paper-button>
              </div>
          </div>


          <!----Tourist  place Bangalore---->
          <div class="about-item">
              <span class="about-item-title"><u>Bangalore</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/Mahabali.jpg"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
               <!---paper button is for adding a button--->  
              <paper-button raised class="btn" on-click="handleClick3"><b>Visit site</b></paper-button>
              </div>
          </div>
      </div>
      


      <!----Tourist  place Varkala---->
      <div class="tourist">
          <div class="about-item">
              <span class="about-item-title"><u>Varkala</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/varkala.jpg"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
               <!---paper button is for adding a button--->   
              <paper-button raised class="btn" on-click="handleClick4"><b>Visit site</b></paper-button>
              </div>
          </div>

          <!----Tourist  place Alleppey---->
          <div class="about-item">
              <span class="about-item-title"><u>Alleppey</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/Alleppey.jpg"></iron-image>
              </div><br><br><br><br><br>
             
              <!---paper button is for adding a button--->    
              <paper-button raised class="btn" on-click="handleClick5"><b>Visit site</b></paper-button>
              
          </div>


          <!----Tourist  place Kerala--->
          <div class="about-item">
              <span class="about-item-title"><u>Kerala</u></span>
              <div class="box">
                  <!--iron image for adding image--->
                  <iron-image sizing="contain" class="shop-item-image" alt="The Polymer logo." src="../images/kerala.webp"></iron-image>
              </div><br><br><br><br><br>
              <div class="about-item-details">
               <!---paper button is for adding a button---> 
              <paper-button raised class="btn" on-click="handleClick6"><b>Visit site</b></paper-button>
              </div>
          </div>
      </div>
      
  </div>
 
    `;

        }
        /**for route path of the linking page */
    handleClick() {
        this.set('route.path', '/hyd');
    }



    handleClick2() {
        this.set('route.path', '/chennai');
    }

    handleClick3() {
        this.set('route.path', '/bangalore');
    }

    handleClick4() {
        this.set('route.path', '/varkala');
    }

    handleClick5() {
        this.set('route.path', '/alleppey');
    }

    handleClick6() {
        this.set('route.path', '/kerala');
    }

}

window.customElements.define('all-sites', AllSites);