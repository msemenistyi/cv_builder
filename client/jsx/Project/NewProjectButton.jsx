/**
 * @jsx React.DOM
 */
define(['react'], function(React){
	var NewProjectButton = React.createClass({
		handleNewProject: function(){
			this.props.onNewProject();
		},
		render: function(){
			return (
				<div id='new-project-button' onClick={this.handleNewProject}>New Project</div>
			);
		}
	});
	return NewProjectButton;
});