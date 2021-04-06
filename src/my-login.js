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




class MyLogin extends PolymerElement {

    static get properties() {
        return {

            username: {

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
    static get template() {
        return html `
        <!---css-->
      <style include="shared-styles">
        
        
        .login{
          background:green;
          color:white;
          width:150px;
          height:30px
          border-radius:50px;

        }
        .login:hover {
          background-color: blue;
        }

        .signup{
          background:green;
          color:white;
          width:150px;
          height:30px;
         
          }

          .signup:hover {
          background-color: blue;
        }

        .card{
          width:40%;
          height:20%;
          padding:20px;
       font-size:10px;
       border-radius:20px;
       text-align:center;
       margin-top:10%;
       background:white;
        }

        
        
      
       
   
      </style>


    
      <center>
        
        
        <!----app location---->
        <app-location route="{{route}}" ></app-location>
        <center>
        
         </center>
        <div class="card">
        <br>
        <h1>Welcome to <br>South India Tourism</h1>
        

        <!---paper input for user name--->
        
        <!---paper input for user password--->
        <paper-input class="custom" label="UserName" value="{{UserName}}" always-float-label>
  </paper-input>
        <paper-input class="custom" type="password" Password label="Password" id="password" value="{{Password}}" always-float-label></paper-input>
        
            

        
         <br><br>

         <!---paper button for login--->
        <paper-button raised class="login" on-click="handleClick"><b>LOGIN</b></paper-button>
        


        <br>
        
        <!---paper button for signup--->
        <h4>Didn't have an account?</h4>&nbsp;<paper-button raised class="signup" on-click="handleClick2"><b>SIGNUP</b></paper-button>
        
        

        </div>
     
        
       
        
     
      </center>
      <br><br><br>

      
    `;

    }






    /**route path for login */
    handleClick() {

        console.log(this.registerData.username);

        if (this.UserName == '' || this.Password == '') {
            alert("Please enter Username and Password");
            return false;
        } else if (this.UserName == this.registerData.username && this.Password == 'sai@123') {
            alert("You have logged in succssfully");
            this.set('route.path', '/home');

        } else {
            alert("Please enter correct Username and Password");
        }
        location.reload();
    }


    /**route path for signup */
    handleClick2() {
        this.set('route.path', '/registration');

    }

}

window.customElements.define('my-login', MyLogin);