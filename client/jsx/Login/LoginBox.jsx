/**
 * @jsx React.DOM
 */
define(['react'], function(React){
	var LoginBox = React.createClass({
		onForgotPasswd: function(){
			history.pushState(null, null, '/forgot-password');
		},
		render: function(){
			return (
				<div id='login-box'>
					<label htmlFor='username'>username</label>
					<input id='username' name='username' />
					<label htmlFor='passwd'>passwd</label>
					<input id='passwd' name='passwd' />
					<span id='forgot-passwd' onClick={this.onForgotPasswd}>Forgot password?</span>
				</div>
			);
		}
	});
	return LoginBox;
});