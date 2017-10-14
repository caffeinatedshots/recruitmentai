import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Applicants } from '../../imports/applicantsDB.js';

import './profile.html';

Template.profile.onCreated(function() {
	Meteor.subscribe("allApplicants");

});

Template.profile.events({
	
});

Template.profile.helpers({
	profile(){
		return Applicants.findOne({_id: Meteor.userId()});
	},

	momentFormat(date, formatString){
		return moment(date).format(formatString);
	},

	equals(expression1, expression2){
		return expression1 == expression2;
	}
});