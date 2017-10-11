FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'main' } ); 
  },
  name: 'main'
});

FlowRouter.route( '/about', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'about' } ); 
  },
  name: 'about'
});

FlowRouter.route( '/login', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'login' } ); 
  },
  name: 'login'
});

FlowRouter.route( '/dashboard', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'dashboard' } ); 
  },
  name: 'dashboard'
});

FlowRouter.route( '/updateProfile', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'updateProfile' } ); 
  },
  name: 'updateProfile'
});

FlowRouter.route( '/discover', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'discover' } ); 
  },
  name: 'discover'
});