Template.challenges.helpers({
	isReady: function() {
    return FlowRouter.subsReady();
  },
  
	loggedIn: function() {
		return Meteor.user()
	},
	
	games: function(){
		return Games.find({ 'player.id': Meteor.userId(), active: true })
  },

  formatDate: function(date) {
  	return client_methods.format_date(date)
	}
})