import {BlogTitleCollection} from './models/blogList';

import BlogListView from './views/blogListView';
import BlogLinkView from './views/blogLinkView';

var Router = Backbone.Router.extend({
  routes: {
    'c.html' : 'index',
    'c.html/:id' : 'blogListView'
  },

  initialize : function(){
    this.titles = new BlogTitleCollection();
    this.titles.fetchTitlesPromise = this.titles.fetch();

    this.blogListView = new BlogListView({collection:this.titles});
    $('#sidebar').html(this.blogListView.el);
  },

  index : function(){
  },

  blogListView : function(id){
    this.fetchTitlesPromise.then(function(){
      var title = this.titles.get(id);
      this.showView(new BlogLinkView({model:titles}));
    }.bind(this));
    console.log('working view');

  },

  /*
   * Helper functions
   */

  showView: function(view) {
    if(this.currentView) this.currentView.remove();
    this.currentView = view;
    $('#appC').html(view.el);
    return view;
  }

});

var router = new Router();

export default router;
