/**
 * @jsx React.DOM
 */
define(['react', 'components/Project/ProjectList', 'components/Project/NewProjectButton'],
 function(React, ProjectList, NewProjectButton){
	var ProjectBox = React.createClass({
		getInitialState: function(){
			return {projects: [{name: 'new project'}]};
		},
		handleNewProject: function(){
			var projects = this.state.projects; 
			projects.push({name: 'new project'});
			this.setState({projects: projects});
		},
		render: function(){
			return (
				<div>
					<NewProjectButton onNewProject={this.handleNewProject}/>
					<div>Projects list</div>
					<ProjectList projects={this.state.projects} />
				</div>
			);
		}
	});
	return ProjectBox;
});