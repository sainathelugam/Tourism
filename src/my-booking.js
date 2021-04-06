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

import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/app-route/app-route.js';
import '@polymer/gold-phone-input/gold-phone-input.js';
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-radio-button/paper-radio-button.js';

class MyBooking extends PolymerElement {

    static get template() {
        // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html `
       <style include="shared-styles">
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
 
       /**css for Book now button */
       .Book{
         background:green;
         color:white;
         width:180px;
         border-radius:15px;
     }
 
     /**css for Book button */
     .Book{
         background:green;
         color:white;
         width:180px;
         border-radius:15px;
     }
     .Book:hover {
         background-color: blue;
       }
       .Book:hover {
         background-color: blue;
       }
       /**css for card */
       .card{
           
           width:25%;
           height:40%;
           padding:30px;
        font-size:10px;
        border-radius:20px;
        text-align:center;
        margin-top:5%;
        background:white;
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
     <a name="booking" href="[[rootPath]]booking"><paper-button >Toursit Booking</paper-button></a>
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
 
 
 
          
        
      <center>
       
      <div class="card">
      <h1>Tourist Booking </h1>
      <iron-form id='myForm'>
       <form is = "iron-form"   id = "form" action="/form/handler">
 
       <!---paper input---->
       <paper-input required auto-validate error-message="please fill UserName!" value="{{UserName}}" always-float-label label="Fullname" ></paper-input>
          
 
 
       <paper-input type="email" required auto-validate error-message="please fill email!" value="{{email}}" always-float-label label="Email-Id" ></paper-input>
 
        <!--gold phone input foe phone number--->
       <gold-phone-input required auto-validate error-message="please fill phone number!"value="{{phone}}"always-float-label label="phonenumber" country-code="91" phone-number-pattern="XXX-XXXX-XXX"
        maxlength="12">
   </gold-phone-input><br><br>
   <h2>Date of Booking:
     <iron-input><input placeholder="type-date" required auto-validate error-message="please fill phone number!" always-float-label type="date"></iron-input></h2>
     
 
       <!--paper radio button for gender--->
       <h2>Gender:</h2><br>
      <span><paper-radio-button><h2>Male</h2></paper-radio-button><span>
       <span><paper-radio-button><h2>Female</h2></paper-radio-button><br><br></span>
 
       <paper-input type="place" required auto-validate error-message="please fill Address!" always-float-label label="Address" "value="{{address}}" ></paper-input>
       <center>
         <br><br>
         <!--paper button for Book now--->
       <paper-button raised class="Book" on-click="handleClick"><b>Book Now</b></paper-button>
       
       <br>
       <br>
       <br>
 
       
 </center>
 
       </form>
       </iron-form>
       <div>
         </div>
         </div>
         </center>
       
 
     `;
    }

    static get properties() {
            return {

                firstname: {

                    type: String,
                    value: {},
                    notify: true
                },
                Email: {
                    type: String,
                    value: {},
                    notify: true
                },
                phonenumber: {
                    type: String,
                    value: {},
                    notify: true
                },

                registerData: {
                    type: Object,
                    value: {},
                    notify: true
                },


            };
        }
        //on click event
    handleClick() {


        if (this.UserName == '' && this.email == '' && this.phone == '') {
            alert("Please fill the form");
        } else {
            alert("Your Booking is Successful");
            this.set('route.path', '/dashboard');

        }
        //to storage data
        this.registerData = {
            "firstname": this.UserName,
            "Email": this.email,
            "phonenumber": this.phone


        }
        console.log(this.registerData);


    }

}

window.customElements.define('my-booking', MyBooking);