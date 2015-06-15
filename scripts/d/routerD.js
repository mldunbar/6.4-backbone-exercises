import {InfoURLCollection} from './models/saveTheURL';

import IndexViewD from './views/indexViewD';
import ViewD from './views/viewD';

var Router = Backbone.Router.extend({

routes: {
  '' : 'indexViewD',
  ':id' : 'viewD'
},


//create the collection
//
initialize: function(){
  this.infoURL = new InfoURLCollection();
  var indexView = new IndexViewD({collection:this.infoURL});
  $('.form').prepend(indexView.el);
},

indexViewD: function(){
    console.log('pls')
},

viewD: function(){
  console.log('u got dis')
}

});

var router = new Router();

export default router;
