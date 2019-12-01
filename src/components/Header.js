import React from "react";
class Header extends React.Component {
	state = {
		isSwicthOn: false
	};
	render() {
		const { branding } = this.props;
		return (
			<div>
				<nav className="header">
					<div
						onClick={() =>
							this.setState({
								isSwicthOn: !this.state.isSwicthOn
							})
						}
						className={
							this.state.isSwicthOn
								? "hamburger close"
								: "hamburger"
						}
					>
						<span className="lines"></span>
						<span className="lines"></span>
						<span className="lines"></span>
					</div>
					<ul
						className={
							this.state.isSwicthOn
								? "nav-links open"
								: "nav-links"
						}
					>
						<li className="brand list-group-item">
							<a href="/">{branding} </a>
						</li>
						<li className="list-group-item">
							<a href="/">Home</a>
						</li>
						<li className="list-group-item">
							<a href="/">About</a>
						</li>
						<li className="list-group-item">
							<a href="/">Contact</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default Header;