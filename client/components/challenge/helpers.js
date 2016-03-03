Template.challenge.helpers({

  game: function() {
  	var challengeId = Session.get('challengeId')
  	return Games.findOne({ _id: challengeId })
  }
  
});