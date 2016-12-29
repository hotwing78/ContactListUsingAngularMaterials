import angular from 'angular';

import App from 'src/app';

/**
 * Manually bootstrap the application when AngularJS and
 * the application classes have been loaded.
 */
angular
  .element( document )
  .ready( function() {
    angular
      .module( 'contact-list-boot', [ App.name ] )
      .run(()=>{
        console.log(`Running the 'contact-list-boot' `);
      });

    let body = document.getElementsByTagName("body")[0];
    angular.bootstrap( body, [ 'contact-list-boot' ]);
  });
