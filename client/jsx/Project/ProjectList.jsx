/**
 * @jsx React.DOM
 */
define(['react', 'components/Project/Project'], function(React, Project){
	var ProjectList = React.createClass({
		render: function(){
			var projects = this.props.projects.map(function (proj) {
				return <Project author={proj}>proj.name</Project>;
			});
			return (
				<div id='project-list'>
					{projects}
				</div>
			);
		}
	});
	return ProjectList;
});