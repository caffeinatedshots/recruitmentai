FlowRouter.route( '/', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'main' } ); 
  },
  name: 'main'
});

FlowRouter.route( '/howItWorks', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'howItWorks' } ); 
  },
  name: 'howItWorks'
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

FlowRouter.route( '/profile', {
  action: function() {
    BlazeLayout.render( 'content', {body: 'profile' } ); 
  },
  name: 'profile'
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