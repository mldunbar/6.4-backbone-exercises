var BlogTitle = Backbone.Model.extend({
  idAttribute: '_id',

  toJSON: function() {
      return _.extend({}, _.omit(this.attributes, '_id'), {
        id: this.id
      });
    },

});

var BlogTitleCollection = Backbone.Collection.extend({
  model: BlogTitle,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/posts'
});

export default {BlogTitle, BlogTitleCollection};
