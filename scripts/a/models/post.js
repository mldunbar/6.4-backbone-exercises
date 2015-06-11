var Post = Backbone.Model.extend({
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/blog',
    defaults: {
      title: 'yolo',
      body: 'mama...just killed a man'
  },

  // var title = new Title(){
  //   this.get('title');
  //   console.log('title');
  // },
  //
  // var body = new Body(){
  //   this.get('body');
  //   console.log('body');
  // },

});

export default Post;
