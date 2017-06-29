import React, {Component} from 'react';

export default class ProjectSingle extends Component {
	render() {
		return (
			<li>
				{this.props.project.text}
				{this.props.project.complete.toString()}
			</li>
		)
	}
}