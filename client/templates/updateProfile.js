import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import './updateProfile.html';

Template.updateProfile.onCreated(function() {
});

Template.updateProfile.events({
	"submit #profile"(event, template){
		event.preventDefault();
		if (confirm("Confirm submission?")){
			const name = event.target.name.value;
			const sex = event.target.sex.value;
			const address = event.target.address.value;
			const postal = event.target.postal.value;
			const email = event.target.email.value;
			const telephone = event.target.telephone.value;
			const educationLevel = event.target.educationLevel.value;
			const fieldOfStudy = event.target.fieldOfStudy.value;
			const educationFrom = event.target.educationFrom.value;
			const educationTo = event.target.educationTo.value;
			const instituition = event.target.instituition.value;
			const grade = event.target.grade.value;
			const company = event.target.company.value;
			const workFrom = event.target.workFrom.value;
			const workTo = event.target.workTo.value;
			const jobRole = event.target.jobRole.value;
			const jobDescription = event.target.jobDescription.value;
			const skills = event.target.skills.value.split(",");

			Meteor.call('upsertApplicant', name, sex, address, postal, email, telephone, educationLevel, fieldOfStudy, educationFrom, educationTo,
				instituition, grade, company, workFrom, workTo, jobRole, jobDescription, skills, function(err){
					if (err){
						sAlert.error(err.reason);
					}
				});

			sAlert.success("Your profile has been updated");

			FlowRouter.go("/profile");
		}
	}
	
});

Template.updateProfile.helpers({
});