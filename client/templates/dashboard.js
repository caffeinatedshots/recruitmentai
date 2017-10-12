import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Applicants } from '../../imports/applicantsDB.js';

import './dashboard.html';

Template.dashboard.onCreated(function() {
	Meteor.subscribe("allApplicants");

});

Template.dashboard.events({
	
});

Template.dashboard.helpers({
	profile(){
		return Applicants.findOne({_id: Meteor.userId()});
	}
});