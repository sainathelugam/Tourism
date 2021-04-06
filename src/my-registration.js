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

class MyRegistration extends PolymerElement {

    static get template() {
        // Template getter must return an instance of HTMLTemplateElement.
        // The html helper function makes this easy.
        return html `
      <style include="shared-styles">

      /**css for signup button */
      .signup{
        background:green;
        color:white;
        width:180px;
        border-radius:15px;
    }

    /**css for signin button */
    .signin{
        background:green;
        color:white;
        width:180px;
        border-radius:15px;
    }
    .signup:hover {
        background-color: blue;
      }
      .signin:hover {
        background-color: blue;
      }
      /**css for card */
      .card{
          
          width:30%;
          height:20%;
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



         
       
     <center>
      
     <div class="card">
     <h1>Register Account </h1>
     <iron-form id='myForm'>
      <form is = "iron-form"   id = "form" action="/form/handler">

      <!---paper input---->
      <paper-input required auto-validate error-message="please fill UserName!" value="{{UserName}}"  label="UserName" always-float-label></paper-input>
         


      <paper-input type="email" required auto-validate error-message="please fill email!" value="{{email}}" label="Email-Id" always-float-label></paper-input>

       <!--gold phone input foe phone number--->
      <gold-phone-input required auto-validate error-message="please fill phone number!"value="{{phone}}" always-float-label label="Phone Number" country-code="91" phone-number-pattern="XXX-XXXX-XXX"
       maxlength="12">
  </gold-phone-input><br><br>
  <h2>Date of Birth:
    <iron-input><input placeholder="type-date" required auto-validate error-message="please fill phone number!" type="date"></iron-input></h2>
    
           <br><br>

      <!--paper radio button for grnder--->
      <h2>Gender:</h2><br>
     <span><paper-radio-button><h2>Male</h2></paper-radio-button><span>
      <span><paper-radio-button><h2>Female</h2></paper-radio-button><br><br></span>

      <paper-input type="city" required auto-validate error-message="please fill city!" label="city" always-float-label></paper-input>
      <paper-input type="state" required auto-validate error-message="please fill state!" label="state" always-float-label></paper-input>
      <paper-input type="country" required auto-validate error-message="please fill country!" label="country" always-float-label></paper-input>
      <center>
        <br><br>
        <!--paper button for signin--->
      <paper-button raised class="signup" on-click="handleClick"><b>SignUp</b></paper-button>
      
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

                username: {

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
            alert("You have successfully registered");
            this.set('route.path', '/login');

        }

        //to storage data
        this.registerData = {
            "username": this.UserName,
            "Email": this.email,
            "phonenumber": this.phone,

        }
        console.log(this.registerData);


    }

}

window.customElements.define('my-registration', MyRegistration);