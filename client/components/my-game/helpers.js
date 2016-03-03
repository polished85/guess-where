Template.my_game.helpers({

  game: function() {
  	var myGameId = Session.get('myGameId')
  	var myGame = Games.findOne({ _id: myGameId })
  	return myGame
  }
  
});