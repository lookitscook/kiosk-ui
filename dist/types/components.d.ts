/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface KioskSiteNavigation {}
}

declare global {


  interface HTMLKioskSiteNavigationElement extends Components.KioskSiteNavigation, HTMLStencilElement {}
  var HTMLKioskSiteNavigationElement: {
    prototype: HTMLKioskSiteNavigationElement;
    new (): HTMLKioskSiteNavigationElement;
  };
  interface HTMLElementTagNameMap {
    'kiosk-site-navigation': HTMLKioskSiteNavigationElement;
  }
}

declare namespace LocalJSX {
  interface KioskSiteNavigation {}

  interface IntrinsicElements {
    'kiosk-site-navigation': KioskSiteNavigation;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'kiosk-site-navigation': LocalJSX.KioskSiteNavigation & JSXBase.HTMLAttributes<HTMLKioskSiteNavigationElement>;
    }
  }
}


