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
import '@polymer/paper-card/paper-card.js';



class MyDashboard extends PolymerElement {
    static get template() {
        return html `
      <style include="shared-styles">
      
        .container-fluid{
          margin-top:100px;
          margin-bottom:30px;
        }
       
    



 .card-text1 {
	color:blue;
	border-radius: 50px;
	text-align:center;
	font-size:4.5em;
  height:100px;
  width:140px;
 }	

 div{
   display:flex;   /**The flex property sets the flexible length on flexible items. */
   align-items:initial;/**The align-items property specifies the default alignment for items inside the flexible container. */
  
    flex-wrap: wrap;/**The flex-wrap property specifies whether the flexible items should wrap or not. */
    
 }
 
 
 .card-text2 {
	color:green;
	border-radius: 50px;
	text-align:center;
	font-size:4.5em;
  height:100px;
  width:100px;
 }	
 
  #customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: white;
}
.card-content{
  height:300px;
  width:300px;
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
  .card{
    height:150px;
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
  .card{
    border-width:450px;
    font-size:10px;
    padding:0px;
    width:300px;
    padding-left:10px;
  }
  #customers{
    width:200px;
    font-size:12px;
  }
}
 </style>

 
   <!----app location---->
   <app-location route="{{route}}"></app-location>
<!--nav bar--->
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

  </div><br>

    <h1 align="center">Booking History</h1><br><br>
      
     

   <!----Booked Tourister---->
   
	<table id="customers">
  
       <thead bgcolor="lightblue" class="thead"><!---use to group header content in a html table-->
          <tr>
            <th scope="col">Name</th><!---The scope attribute specifies whether a header cell is a header for a column, row, or group of columns or rows.   ---->
            <th scope="col">E-mail</th>
            <th scope="col">Phone Number</th>
            
          </tr>
        </thead>
	<tbody>	
  <tr>
     <!--data storing-->
			<td>{{registerData.firstname}}</td>
            <td>{{registerData.Email}}</td>
            <td>{{registerData.phonenumber}}</td>
            
  </tr>

 

  </tbody>
</table>

  </div>
</div>




    `;

    }


}

window.customElements.define('my-dashboard', MyDashboard);