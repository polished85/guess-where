
Template.challenges.events({
	'click .view-game': function() {
		var gameId = this._id;
    Session.set('gameId', gameId);
  },

	'change #gamesFilterState input': function(event){
		var inputValue = event.target.value
		state = JSON.parse(inputValue)
		Session.set('gamesFilterState', state)
	}
});