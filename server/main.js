import { Meteor } from 'meteor/meteor';
import { Applicants } from '../imports/applicantsDB.js';
 


Meteor.startup(() => {
});

Meteor.methods({
	addApplicant(name, sex, address, postal, email, telephone, educationLevel, fieldOfStudy, educationFrom, educationTo, 
		instituition, grade, company, workFrom, workTo, jobRole, jobDescription, skills){

		Applicants.insert({
			_id : Meteor.userId(),
			Username : Meteor.user().username,
			ChangedOn : new Date(),
			Name : name,
			Sex : sex,
			Address : address,
			Postal : postal,
			Email : email,
			Telephone : telephone,
			EducationLevel : educationLevel,
			FieldOfStudy : fieldOfStudy,
			EducationFrom : educationFrom,
			EducationTo : educationTo,
			Instituition : instituition,
			Grade : grade,
			Company : company,
			WorkFrom : workFrom,
			WorkTo : workTo,
			JobRole : jobRole,
			JobDescription : jobDescription,
			Skills : skills
		});
	}
});