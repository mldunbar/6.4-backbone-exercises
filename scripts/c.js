//capital R because this is a constructor

import Router from './c/routerC';

(function(){
  'use strict';

  // window.routerC = new Router();

  $(document).ready(function(){
    Backbone.history.start();
  });

})();
