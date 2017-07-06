project = new Mongo.Collection('project')

Meteor.publish('allprojects', function() {
	return project.find({complete:false});
});