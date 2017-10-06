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

FlowRouter.route( '/profile', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'profile' } ); 
  },
  name: 'profile'
});