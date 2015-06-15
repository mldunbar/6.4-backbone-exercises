export default Backbone.View.extend({

  template: JST.dindex,

  events: {
    'click button' : 'submitURL',
  },

  initialize: function(){
    this.render()
  },

  render: function(){
    this.$el.html(this.template(this.collection.toJSON()));
  },

  submitURL: function(e){
    e.preventDefault();
    this.collection.create({
      URL: this.$('.URL').val(),
      title: this.$('.title').val(),
      tag: this.$('tag').val(),
    });
  }
});
