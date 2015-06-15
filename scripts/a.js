import View from './a/views/apostview';
import {PostCollection} from './a/models/post';

(function(){
  'use strict';

  $(document).ready(function(){

    var posts = new PostCollection();
    var index = new View({collection : posts});

    $('#app').html(index.el);
  });

})();
