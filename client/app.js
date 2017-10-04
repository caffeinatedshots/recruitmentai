import { Template } from 'meteor/templating';

import './app.html';
import '../imports/startup/accounts-config.js';

Meteor.startup(function(){
	sAlert.config({
		effect: 'slide',
		postiion: 'top-right',
		timeout: 3000,
		html: false,
		onRouteClose: false,
		stack: true,
		offset: 80,
		beep: false,
		onClose: _.noop
	});
});