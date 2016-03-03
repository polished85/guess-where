Template.challenge.events({

	'click #clue': function(e){
    var challengeId = Session.get('challengeId')
    console.log(challengeId)
    var index = e.target.getAttribute('data-index') - 1
    console.log(index)

    Meteor.call('revealPlayerClue', challengeId, index, function(error, result) {
      if (error) {
        console.log(error)
      } else {
        console.log('result', result)
      }
    })
  },

  'click #guess-btn': function(e){

    var guess = {
      guess: document.getElementById('guess').value,
      active: true,
      graded: false,
      correct: false
    }
    var challengeId = Session.get('challengeId')
    console.log('guess', guess)

    Meteor.call('addGuess', challengeId, guess, function(error, result) {
      if (error) {
        console.log(error)
      } else {
        console.log('result', result)
      }
    })
  },






  'click #gameClues .reveal-item-text': function(event) {
    var clueText = event.target.parentNode.querySelector('.list-group-item-text').textContent
    console.log(clueText)
    var gameId = Session.get('gameId')
    var gameData  = Games.findOne({ _id: gameId })
    var clues = gameData.clues
    var clueCount = clues.length
    for(i=0; i<clueCount; i++) {
      var clueItem = clues[i]
      if( clueItem.clue === clueText) {
        var index = clues.indexOf(clueItem)
      }
    }
    console.log(index)
    if (index > -1) {
      Meteor.call('clues', gameId, index, function(error, results) {
        if (error) {
          console.log(error)       
        } else {
          console.log(results)
        }
      })
    }
	},

  'click #guessButton': function() {
    var gameId = Session.get('gameId')
    var gameData  = Games.findOne({ _id: gameId })
    var guessCount = gameData.guessCount;
    var guessText = document.getElementById('guessText').value
    var guess = {
      guess: guessText,
      active: true,
      graded: false,
      correct: false
    }
    if (guessCount > 0) {

      Meteor.call('checkGuess', gameId, guess, function(error, results) {
        if (error) {
          console.log(error)
        } else {
          console.log(results)
          document.getElementById('guessText').value = ""
        }
      })
    } else {
      // no guesses left 
    }
  }

});