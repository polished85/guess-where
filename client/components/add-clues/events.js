
Template.add_clues.events({
	'click #send-game': function(e) {

		var firstClue = {
			clue: document.getElementById('first-clue').value,
			active: false
		}
		var secondClue = {
			clue: document.getElementById('second-clue').value,
			active: false
		}
		var thirdClue = {
			clue: document.getElementById('third-clue').value,
			active: false
		}
		var clues = [
			firstClue,
			secondClue,
			thirdClue
		]

		var myGameId = Session.get('myGameId')
		Meteor.call('updateGameClues', myGameId, clues, function(error, result) {
      if (error) {
        console.log(error)
      } else {
        console.log('result', result)
        FlowRouter.go('/my-game/' + myGameId)
      }
    })
	}
})
