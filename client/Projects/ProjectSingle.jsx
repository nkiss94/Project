import React, {Component} from 'react';

export default class ProjectSingle extends Component {

	toggleChecked() {
		console.log(this);
		Meteor.call('toggleProject', this.props.project._id, this.props.project.complete);
	}

	deleteProject() {
		console.log(this);
		Meteor.call('deleteProject', this.props.project._id);
	}

	render() {
		return (
			<li>
				<input type='checkbox'
						readOnly={true}
						checked={this.props.project.complete}
						onClick={this.toggleChecked.bind(this)} />
				{this.props.project.text}
				<button className='btn-cancel'
						onClick={this.deleteProject.bind(this)}>
						&times;
						</button>
			</li>
		)
	}
}