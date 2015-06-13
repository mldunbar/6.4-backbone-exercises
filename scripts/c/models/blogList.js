var BlogTitle = Backbone.Model.extend({
  idAttribute: '_id',

    defaults : {
      'title': '',
    },

});

var BlogTitleCollection = Backbone.Collection.extend({
  model: BlogTitle,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/MLD'
});

export default {BlogTitleCollection};
