Template.header.events({
	
	'click #goBack': function() {
		window.history.back()
	},

	'click #navButton': function() {
		Session.set('nav_state', 'open')
	}

});