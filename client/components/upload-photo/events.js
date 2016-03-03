
Template.upload_photo.events({
    
    'click .image-list .user-image': function(e) {
        var imagePath = '/img/' + e.target.id + '.jpg';
        console.log('imagePath', imagePath)
        var myGameId = Session.get('myGameId')

        Meteor.call('updateGameImage', myGameId, imagePath, function(error, result) {
            if (error) {
                console.log(error)
            } else {
                console.log('result', result)
                FlowRouter.go('/add-clues')
            }
        })	
    }
});
