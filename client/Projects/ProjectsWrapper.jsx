import React from 'react'
import ReactDom from 'react-dom'
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import ProjectForm from './ProjectForm.jsx'
import ProjectSingle from './ProjectSingle.jsx'

project = new Mongo.Collection('project')

export default class ProjectsWrapper extends TrackerReact(React.Component) {

	projects() {
		return project.find().fetch();
	};

	render() {

		console.log(this.projects());
		return (
			<div>
				<h1>My Projects</h1>
				<ProjectForm />
				<ul className='projects'>
					{this.projects().map((project) =>{
						return <ProjectSingle key={project._id} project={project} />
					})}
				</ul>
			</div>
				
			
		)
	}
}
