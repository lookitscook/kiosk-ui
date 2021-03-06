import { Component, h } from '@stencil/core';

@Component({
  tag: 'kiosk-site-navigation',
  styleUrls: [ 
    'kiosk-site-navigation.css', 
    '../../assets/fontawesome/css/all.css'
  ],
  shadow: true
})
export class KioskSiteNavigation {
  render() {
    return <header>
       <a href="https://kiosk.cook.company" id="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 304.56 101.88"><path d="M68.7,6.4H50.44L17,53.11V6.4H0v93H17V76L30.49,58,51.7,99.4H71.09L42,44.3ZM88.16,0a9.26,9.26,0,0,0-9.64,9.36c0,5.31,3.77,9.22,9.64,9.22,5.59,0,9.64-3.91,9.64-9.22A9.26,9.26,0,0,0,88.16,0ZM80,99.4H97v-70H80Zm62.52-72C128.13,27.39,110,35.5,110,64.57c0,25.3,11.6,37.31,30.33,37.31,18.45,0,32.7-12.3,32.7-39.13C173,30.61,152.87,27.39,142.52,27.39Zm-1.12,62.19c-12.44,0-14.53-14-14.53-27,0-13.42,4.61-22.92,14.81-22.92,10.62,0,14.26,9.64,14.26,25.3C155.94,79.52,151.61,89.58,141.41,89.58Zm66.8-50c5.87,0,11.74,2.93,17.05,7.55l8-9.78c-5.73-5.73-14.81-9.92-25.3-9.92-13.56,0-25.58,7.69-25.58,22.22S193.81,67.5,204,70.44c6.57,2,11.88,3.91,11.88,10.2s-4.75,8.94-10.62,8.94c-7.13,0-15.37-3.77-20-6.71l-4.89,11.88c3.63,2.8,13.56,7.13,25.58,7.13,15.65,0,26.41-7.83,26.41-22.36s-11.32-18.45-21.52-21.66c-6.57-2-12.44-3.77-12.44-10.2C198.42,42.07,203.17,39.55,208.21,39.55ZM304.56,29.4H287.47l-25.35,43H261V2.4H245v97h14.47l15.17-25,11.83,25H304L285.64,60.58Z"/></svg>
        </a>
      <nav>
        <ul>
          <li><a href="https://kiosk.cook.company/features">
            Pricing
            </a></li>
          <li><a href="https://support.kiosk.cook.company/">
            Support &amp; Documentation
          </a></li>
          <li><a href="https://support.kiosk.cook.company/hc/en-us/articles/360033897672-Quick-Start">
            Get Started
            </a></li>
          <li><a href="https://dashboard.kiosk.cook.company/">
              <span class="text">Sign In</span>
              <i class="fas fa-wrench"></i>
            </a></li>
        </ul>
      </nav>
    </header>;
  }
}
