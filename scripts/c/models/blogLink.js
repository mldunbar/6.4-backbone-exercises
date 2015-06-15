var BlogLink = Backbone.Model.extend({
  idAttribute: '_id',

  toJSON: function() {
      return _.extend({}, _.omit(this.attributes, '_id'), {
        id: this.id
      });
    },

});

var BlogLinkCollection = Backbone.Collection.extend({
  model: BlogLink,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/MLD'
})

export default {BlogLinkCollection};
