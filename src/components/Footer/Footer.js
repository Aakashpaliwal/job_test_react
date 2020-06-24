import React from "react";
import "./footer.css";
const Footer = (props) => {
	return (
		<div>
			<footer class="footer fixed-bottom">
				<div className="container">
					<div className="row">
						<div className="col-6">
							<p>&copy;CopyRight Protected 2018 | Letsventure</p>
						</div>
						<div className="col-6">
							<p style={{ float: "right" }}>
								Terms &amp; Conditions.
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
