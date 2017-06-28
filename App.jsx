import React from 'react'
import ReactDom from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import projectform from './projectform'

project = new Mongo.Collection('project')

export default class App extends TrackerReact(React.Component) {

	projects() {
		return project.find().fetch();
	};

	render() {
		let proj = this.projects();
		if(proj.length < 1) {
			return(<div>Loading</div>)
		}
		console.log(this.projects());
		return (
			<div>
				<h1>My Projects</h1>
				<projectform />
				<div>
					{proj[0].text}
				</div>
			</div>
				
			
		)
	}
}
