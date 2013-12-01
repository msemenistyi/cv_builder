/**
 * @jsx React.DOM
 */
define(['react', 'components/Project/ProjectBox', 'components/Login/LoginBox'], 
	function(React, ProjectBox, LoginBox){
	React.renderComponent(
		<LoginBox />,
		document.getElementById('container')
	);
});