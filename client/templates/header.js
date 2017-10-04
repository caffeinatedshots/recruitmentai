import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Accounts } from 'meteor/accounts-base';

Template.header.events({
	'click #logout'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    console.log("logout");
    Meteor.logout();
    sAlert.info("You are now logged out");
    FlowRouter.go("/");
  },
})
