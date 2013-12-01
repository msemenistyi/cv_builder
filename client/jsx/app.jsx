/**
 * @jsx React.DOM
 */
define(['react', 'components/Project/ProjectBox'], function(React, ProjectBox){
	React.renderComponent(
		<ProjectBox />,
		document.getElementById('container')
	);
});