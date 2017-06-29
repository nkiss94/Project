import React from 'react';
import ReactDom from 'react-dom';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';
import ProjectsWrapper from './Projects/ProjectsWrapper.jsx'

FlowRouter.route('/', {
	action() {
		mount(MainLayout, {
			content: (<ProjectsWrapper />)
		})
	}
})