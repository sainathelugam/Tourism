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
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-button/paper-button.js';
import './my-icons.js';
import '@polymer/iron-media-query/iron-media-query.js';
import './shared-styles.js';


// Gesture events like tap and track generated from touch will not be
// preventable, allowing for better scrolling performance.
setPassiveTouchGestures(true);

// Set Polymer's root path to the same value we passed to our service worker
// in `index.html`.
setRootPath(MyAppGlobals.rootPath);

class MyApp extends PolymerElement {
    static get template() {
        return html `
        
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: white;

          display: block;
        }


        app-header {
          color: #fff;
          background-color: var(--app-primary-color);
          font-weight:bold;

          
        
        }

        app-header paper-icon-button {
          --paper-icon-button-ink-color: white;
        
        }
        a{
          text-decoration:none;
          font-size:17px; 
          font-weight:bold;
          color:white;
        }

        
      </style>

      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>

      <app-route route="{{route}}" pattern="[[rootPath]]:page" data="{{routeData}}" tail="{{subroute}}">
      </app-route>

      

          <!----iron pages--->
          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            
            <my-login name="login" register-data="{{registerData}}"></my-login>
            <my-home name="home"></my-home>
            <my-booking name="booking" register-data="{{registerData}}"></my-booking>
            <all-sites name="sites"></all-sites>
            <my-hyd name="hyd"></my-hyd>
            <my-chennai name="chennai"></my-chennai>
            <my-bangalore name="bangalore"></my-bangalore>
            <my-varkala name="varkala"></my-varkala>
            <my-alleppey name="alleppey"></my-alleppey>
            <my-kerala name="kerala"></my-kerala>
            <my-dashboard register-data="{{registerData}}" name="dashboard"></my-dashboard>
            <my-registration register-data="{{registerData}}" name="registration"></my-registration>
            <my-view404 name="view404"></my-view404>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `;
    }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged'
            },
            routeData: Object,
            subroute: Object,

            registerData: {
                type: Object,
                value: {}
            }
        };
    }


    static get observers() {
        return [
            '_routePageChanged(routeData.page)'
        ];
    }

    _routePageChanged(page) {
        // Show the corresponding page according to the route.
        //
        // If no page was found in the route data, page will be an empty string.
        // Show 'view1' in that case. And if the page doesn't exist, show 'view404'.
        if (!page) {
            this.page = 'login';
        } else if (['login', 'home', 'booking', 'sites', 'hyd', 'chennai', 'bangalore', 'varkala', 'alleppey', 'kerala', 'dashboard', 'registration'].indexOf(page) !== -1) {
            this.page = page;
        } else {
            this.page = 'view404';
        }

        // Close a non-persistent drawer when the page & route are changed.
        // if (!this.$.drawer.persistent) {
        // this.$.drawer.close();
        // }
    }

    _pageChanged(page) {
        // Import the page component on demand.
        //
        // Note: `polymer build` doesn't like string concatenation in the import
        // statement, so break it up.
        switch (page) {

            case 'login':
                import ('./my-login.js');
                break;
            case 'home':
                import ('./my-home.js');
                break;
            case 'booking':
                import ('./my-booking.js');
                break;

            case 'sites':
                import ('./all-sites.js');
                break;
            case 'hyd':
                import ('./my-hyd.js');
                break;
            case 'chennai':
                import ('./my-chennai.js');
                break;
            case 'bangalore':
                import ('./my-bangalore.js');
                break;
            case 'varkala':
                import ('./my-varkala.js');
                break;
            case 'alleppey':
                import ('./my-alleppey.js');
                break;
            case 'kerala':
                import ('./my-kerala.js');
                break;
            case 'dashboard':
                import ('./my-dashboard.js');
                break;

            case 'registration':
                import ('./my-registration.js');
                break;
            case 'view404':
                import ('./my-view404.js');
                break;
        }
    }
}

window.customElements.define('my-app', MyApp);