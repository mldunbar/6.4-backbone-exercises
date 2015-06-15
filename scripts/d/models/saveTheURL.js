var InfoURL = Backbone.Model.extend({
  idAttribute: '_id',

  defaults : {
    'URl' : '',
    'title' : '',
    'tag' : ''
  },

  toJSON: function(){
    return _.extend({}, _.omit(this.attributes, '_id'),{
      id: this.id
    });
  }
});

var InfoURLCollection = Backbone.Collection.extend({
  model: InfoURL,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/MLD'
});

export default {InfoURL, InfoURLCollection};
