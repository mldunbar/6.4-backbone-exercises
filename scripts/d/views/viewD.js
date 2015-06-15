export default Backbone.View.extend({

  template: JST.tagD,

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

});
