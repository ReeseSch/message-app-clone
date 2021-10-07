export default {
	id: '1',
	users: [{
		id: 'u11',
		name: 'Reese',
		imageUri: 'https://drive.google.com/file/d/1zM7OvPgcFw2Vg1cWgHtdyItAwbhwYTed/view?usp=sharing'
	  }, {
		id: 'u2',
		name: 'Elon Musk',
		imageUri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
	}],
	messages: [{
		id: 'm1',
		content: 'How are you, Elon???',
		createdAt: '2020-10-10T12:48:00.000Z',
		user: {
			id: 'u11',
			name: 'Reese',
		},
	}, {
		id: 'm2',
		content: 'Im doing great bro!!',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm3',
		content: 'How about you?',
		createdAt: '2020-10-03T14:49:40.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm4',
		content: 'Not too bad. Just living the dream.',
		createdAt: '2020-10-03T14:50:00.000Z',
		user: {
			id: 'u11',
			name: 'Reese',
		},
	}, {
		id: 'm5',
		content: 'How is SpaceX doing?',
		createdAt: '2020-10-03T14:51:00.000Z',
		user: {
			id: 'u11',
			name: 'Reese',
		},
	}, {
		id: 'm6',
		content: 'going to the Moooooon',
		createdAt: '2020-10-03T14:49:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}, {
		id: 'm7',
		content: 'Bro, lets go colonize Mars!!!',
		createdAt: '2020-10-03T14:53:00.000Z',
		user: {
			id: 'u2',
			name: 'Elon Musk',
		},
	}]
}

