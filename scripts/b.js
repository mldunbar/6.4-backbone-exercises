import View from './b/views/bpersonview';
import {PersonCollection} from './b/models/person';

(function(){
  'use strict';

  $(document).ready(function(){

    var person = new PersonCollection();
    var index = new View({collection : person});

    $('#app').html(index.el);
  });

})();
