Meteor.methods({
    'addproject'(text) {
		project.insert({
			text: text,
			complete: false,
			createdAt: new Date()
		});
	},
	toggleProject(id, status) {
		project.update(id, {
			$set: {complete: !status}
		})
	},

	deleteProject(id) {
		project.remove(id);
	}
});