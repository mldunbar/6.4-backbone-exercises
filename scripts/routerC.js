var appRouter = Backbone.Router.extend({
  routes: {
    '' : 'c.html',
    'blogListView' : 'c/:id'
  },

  initialize : function(){
    console.log('working, yo');
  },

  'c.html' : function(){

  },

  'c/:id' : function(){

  }

});

var router = new Router();

export default router;
