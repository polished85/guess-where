Template.nav.helpers({
	
	loggedIn: function() {
		return Meteor.user()
	},

	navState: function() {
		return Session.get('nav_state')
	}
});