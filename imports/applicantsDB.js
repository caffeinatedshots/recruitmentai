import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
 
export const Applicants = new Mongo.Collection('applicants');

if (Meteor.isServer) {
  // This code only runs on the server
  Meteor.publish('allApplicants', function() {
  	return Applicants.find();
  });
};