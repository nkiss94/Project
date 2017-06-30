import React, {Component} from 'react';

export default class ProjectForm extends Component {

		addproject(event) {
		event.preventDefault();
		var text = this.refs.project.value.trim();

		Meteor.call('addproject', text, ()=>{
			this.refs.project.value = "";
		})};

	render() {
		return (
				<form className='new-project' onSubmit={this.addproject.bind(this)}>
				<input 
					type='text' 
					ref='project'
					placeholder='Finish React Meteor Series' />
				</form>
			)
	}
}