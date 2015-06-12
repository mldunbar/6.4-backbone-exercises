export default Backbone.View.extend({

  tagName: 'index',
  className: 'index-form',

  template: JST.aindex,

  event : {
    'click button' : 'submitPost',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  submitPost: function(e) {
    e.preventDefault();

    var title = this.$('title-post').val();
    var body = this.$('body-post').val();

    this.collection.create({
      title: title,
      body: body
    });
  }

});
