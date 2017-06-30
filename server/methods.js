Meteor.methods({
    'addproject'(text) {
		project.insert({
			text: text,
			complete: false,
			createdAt: new Date()
		});
	}
});