// create route group named 'exposed'
var protectedRoutes = FlowRouter.group({
  name: 'protected_routes',
  triggersEnter: [function(context, redirect) {
      console.log('running group triggers')
      // set current route to var
      var route = FlowRouter.current().route
      // if user is logged in...
      if(Meteor.userId() || Meteor.loggingIn()) {
        console.log('user is logged in')
        // continue to attempted route
        console.log(route.path)
        FlowRouter.go(route.path)
      }
      // if user is not logged in
      else {
        console.log('user is not logged in. Redirecting to landing page')
        // save attempted route (so we can redirect after user logs in)
        Session.set('redirectAfterLogin', route.path)
        // redirect user to visitor landing view
        FlowRouter.go('dashboard')
      }
    }]
});

// define routes pertaining to 'exposed' group
protectedRoutes.route('/', {
  name: 'dashboard',
  action: function() {
    BlazeLayout.render('layout', { main: 'dashboard' })
  }
})

protectedRoutes.route('/upload-photo', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'upload_photo' })
  }
})

protectedRoutes.route('/add-clues', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'add_clues' })
  }
})

protectedRoutes.route('/my-game', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'my_game' })
  }
})

protectedRoutes.route('/my-game/:id', {
  triggersEnter: [function(context) {

    Session.set('myChallengeId', context.params.id)
    console.log('myGameId', Session.get('myGameId'))
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'my_game' })
  }
})

protectedRoutes.route('/challenges', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'challenges' })
  }
})

protectedRoutes.route('/challenge', {
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'challenge' })
  }
})

protectedRoutes.route('/challenge/:id', {
  triggersEnter: [function(context) {

    Session.set('challengeId', context.params.id)
    console.log('challengeId', Session.get('challengeId'))
  }],
  action: function(params, queryParams) {
    BlazeLayout.render('layout', { main: 'challenge' })
  }
})

FlowRouter.route('/sign-out', {
  name: 'sign_out',
  action: function() {
    BlazeLayout.render('layout', { main: 'dashboard' })
  },
  triggersEnter: [function(context, redirect) {
    console.log('running /sign-out trigger');
    Meteor.logout()
  }]
})
