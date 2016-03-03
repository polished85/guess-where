/* attach events to nav template ---------- 
------------------------------------------- */
Template.nav.events({
	'click .nav-menu a': function() {
		Session.set('nav_state', 'closed')
	},
	'click #closeNav': function() {
		Session.set('nav_state', 'closed')
	}

});