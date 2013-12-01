/**
 * @jsx React.DOM
 */
define(['react', 'Project'], function(React, Project){
	var ProjectList = React.createClass({
		render: function(){
			return (
				<div>
					<span> Projects list</span>
					<Project />
				</div>
			);
		}
	});
	return ProjectList;
});