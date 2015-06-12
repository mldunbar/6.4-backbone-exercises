export default Backbone.View.extend({

  template: JST.bindex,

  events: {
    'click button' : 'submitPerson',
  },

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.toJSON()));
  },

  submitPerson: function(e) {
    e.preventDefault();
    this.collection.create({
      first_name: this.$('.first_name').val(),
      last_name: this.$('.body-post').val(),
      address: this.$('.address').val(),
      phone_number: this.$('.phone_number').val()
    });
  }

});
