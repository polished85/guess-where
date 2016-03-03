Template.add_clues.helpers({

	image: function(){
		var myGameId = Session.get('myGameId')
		console.log('image', myGameId)
		var game = Games.findOne({ _id: myGameId})
		return game.image
	}

})