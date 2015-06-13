var BlogLink = Backbone.Model.extend({
  idAttribute: '_id',

    defaults : {
      'title' : '',
      'body' : ''
    }

});

var BlogLinkCollection = Backbone.Collection.extend({
  model: BlogLink,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/MLD'
})

export default {BlogLinkCollection};
