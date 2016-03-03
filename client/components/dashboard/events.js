Template.dashboard.events({

  'click .user .user-avatar': function(e) {
    Session.set('playerId', this._id)
  	var player = {
  		id: this._id,
  		email: this.emails[0].address
  	}
  	console.log(player)

  	var user = Meteor.user()
  	console.log(user)

  	var game = {
  		owner: user._id,
  		author: user.emails[0].address,
  		active: false,
  		score: 10,
        image: 'no-image.jpg',
  		player: player,
  		clues: [
  		],
  		guesses: [
  		]
  	}
		console.log(game)

		Meteor.call('addGame', game, function(error, result) {
			if (error) {
				console.log(error)
			} else {
				console.log('result', result)
                
				// Session.set('myGameId', result)
                FlowRouter.go('/upload-photo')
			}
		});	

  }

})