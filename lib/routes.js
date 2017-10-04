FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'main' } ); 
  },
  name: 'main'
});

FlowRouter.route( '/login', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'login' } ); 
  },
  name: 'login'
});