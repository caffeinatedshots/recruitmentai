import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';



Template.login.events({
  'submit .login'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log("login");
    // Get value from form element
    var username = event.target.username.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(username, password, function(err){
        if (err){
            sAlert.error(err.reason);
        }
        else{
            sAlert.success("Welcome, " + username);
            sAlert.success("You are now logged in");
            FlowRouter.go('/discover');
        }
    });
    
    $('.login').trigger('reset');
  },

  'submit .signup'(event) {
    // Prevent default browser form submit
    event.preventDefault();

    // Get value from form element
    var username = event.target.username.value;
    var password = event.target.password.value;

    Accounts.createUser({
            username: username,
            password: password,
    }, function(err){
        if(err){
            sAlert.error(err.reason);
        }
        else{
            $('.signup').trigger('reset');
            sAlert.success("Thank you for registering with us");
            sAlert.success("You are now logged in");
            FlowRouter.go('/');
        }
    });    
    },

    'click #loginSignupToggle'(event, template){
        if($(".login").css("display") == "none"){
            $(".signup").hide();
            $(".login").show();
            $("loginSignupToggle").html("Login");
        }
        else{
            $(".login").hide();
            $(".signup").show();
        }
    },

    


  });