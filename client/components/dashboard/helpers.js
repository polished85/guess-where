
Template.dashboard.helpers({

	loggedIn: function() {
		return Meteor.user()
	},
	
	displayName: function() {
		var displayName = Meteor.user().emails[0].address
		console.log(displayName)
		return displayName
	},

	users: function(){
		console.log(Meteor.users.find({}))
		return Meteor.users.find({})
  },

	games: function(){
		return Games.find({ 'player.id': Meteor.userId() })
  },

  formatDate: function(date) {
  	return moment(date).format('MMM Do')
	}
})
