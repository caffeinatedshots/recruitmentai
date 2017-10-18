import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

Template.discover.events({
	'click #applygoogle'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    $("#google").fadeOut(800);
    sAlert.success("Job applied!");
  },

	'click #applymicrosoft'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    $("#microsoft").fadeOut(800);
    sAlert.success("Job applied!");
  },

  	'click #applygovtech'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    $("#govtech").fadeOut(800);
    sAlert.success("Job applied!");
  },

  	'click #applyraintree'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    $("#raintree").fadeOut(800);
    sAlert.success("Job applied!");
  },

  	'click #applyredhat'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    $("#redhat").fadeOut(800);
    sAlert.success("Job applied!");
  },

  	'click #applydrupal'(event, template) {
    // Prevent default browser form submit
    event.preventDefault();
    $("#drupal").fadeOut(800);
    sAlert.success("Job applied!");
  },
})
