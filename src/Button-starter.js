import React from 'react';

class Button extends React.Component {
	render() {
		return (
			<button>Refresh
				{this.props.children}
			</button>
		);
	}
}

export { Button };
//export default Button;