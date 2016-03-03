
Tracker.autorun( function() {
    Meteor.subscribe('games')
    Meteor.subscribe('userData')
    Meteor.subscribe('allUserData')
})
