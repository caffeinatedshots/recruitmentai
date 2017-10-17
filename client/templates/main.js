import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';


Template.main.events({
	'submit #contact'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    sAlert.success("Message sent!");
  },
})
