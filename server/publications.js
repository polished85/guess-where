Meteor.publish('games', function() {
	return Games.find({})
})

Meteor.publish('userData', function() {
	return Meteor.users.find({ _id: this.userId })
})

Meteor.publish('allUserData', function() {
	return Meteor.users.find({}, {
		fields: {
			'_id': 1,
			'emails': 1,
			'friends': 1
		}
	})
})