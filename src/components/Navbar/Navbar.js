import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<a className="navbar-brand" href="#">
						Logo
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									For Employees
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									For Applicants
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Support
								</a>
							</li>
						</ul>
						<form className="form-inline my-2 my-lg-0">
							<button
								className="btn btn-info my-2 my-sm-0"
								type="submit"
								style={{ marginRight: "10px" }}
							>
								Sign-in
							</button>
							<button
								className="btn btn-outline-info my-2 my-sm-0"
								type="submit"
							>
								Submit Jobs
							</button>
						</form>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
