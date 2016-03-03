 Meteor.methods({

	addGame: function(game) {
		Games.insert(game, function(error, result) {
			if(error) {
				console.log(error)
				return error
			}
			console.log('result', result)
            if (Meteor.isClient) {
                Session.set('myGameId', result)
            }
			return result
		})
    }, 
    
    
    updateGameImage: function(myGameId, imagePath) {
        var update = { 
        $inc: {},
        $set: {}
        }
        update.$set['image'] = imagePath
        Games.update({ _id: myGameId }, update)
	},


	updateGameClues: function(myGameId, clues) {
        var update = { 
        $inc: {},
        $set: {}
        }
        update.$set['clues'] = clues
        update.$set['active'] = true
        Games.update({ _id: myGameId }, update)
	},


	revealPlayerClue: function(challengeId, index) {
		console.log('index', index)
		var update = { 
			$set: {},
			$inc: {} 
		}
		update.$set['clues.' + index + '.active'] = true
		update.$inc['clueCount'] = 1
		update.$inc['score'] = -2

        Games.update({ _id: challengeId }, update)
	},


	addGuess: function(challengeId, guess) {

		console.log(guess)
		var update = { 
			$push: { guesses: guess  }
		}

        Games.update({ _id: challengeId }, update)
	},    
     
     
    getUserById: function(id) {
        var user = Meteor.users.findOne({ _id: id });
        console.log(user);
        return user;
    },


    getGameById: function(id) {
        var user = Game.findOne({ _id: id });
        console.log(game);
        return game;
    },


    deleteGame: function(gameId) {
        Games.remove({_id: gameId})
        return 'game deleted successfully'
    }
});