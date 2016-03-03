Games = new Mongo.Collection('games');

var Schemas = {};

Schemas.Game = new SimpleSchema({
    owner: {
      type: String,
      label: 'owner'
    },
    author: {
      type: String,
      label: 'author'
    },
    active: {
    	type: Boolean,
    	defaultValue: true,
    	label: 'active'
    },
    image: {
    	type: String,
    	label: 'image'
    },
	player: {
	  type: Object,
	  label: 'player',
	},
	'player.id': {
        type: String
    },
    'player.email': {
        type: String
    },
	clues: {
	  type: [Object],
	  label: 'clues',
	  defaultValue: [],
	  minCount: 0,
	  maxCount: 3
	},
    'clues.$.clue': {
        type: String,
        defaultValue: '',
    },
    'clues.$.active': {
        type: Boolean,
        defaultValue: false
    },
	clueCount: {
		type: Number,
		label: 'clue-count',
		defaultValue: 1,
		min: 0,
		max: 3
	},
    guesses: {
		type: [Object],
		label: 'guesses',
		defaultValue: [],
		minCount: 0,
		maxCount: 3
    },
    'guesses.$.guess': {
        type: String,
        defaultValue: '',
    },
    'guesses.$.active': {
        type: Boolean,
        defaultValue: true
    },
    'guesses.$.graded': {
        type: Boolean,
        defaultValue: false
    },
    'guesses.$.correct': {
        type: Boolean,
        defaultValue: false
    },
	guessCount: {
	  type: Number,
	  label: 'guess-count',
		defaultValue: 1,
		min: 0,
		max: 3
	},
	score: {
	  type: Number,
	  label: 'score',
	  defaultValue: 100,
	  min: 0
	}
});

Games.attachSchema(Schemas.Game);