import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.discover.events({
	'click #applygoogle'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    $("#google").fadeOut(800);
    sAlert.success("Job applied!");
  },
})
