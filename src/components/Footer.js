import React from "react";
import "./Footer.css";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
	return (
		<div className="Footer">
			<div className="footer-content">
				<div className="left">
					<ul>
						<li>Prompt Generator</li>
						<li>Dweep Daily</li>
						<li>All Contributors</li>
						<li>Your Data on Dweep.io</li>
						<li>Contribute to Dweep</li>
					</ul>
				</div>
				<div className="right">
					<ul>
						<li>Dweep.io</li>
						<li>Made with love in India </li>
						<FaLinkedin style={{ color: "#ffcd9e" }} />{" "}
						<FaInstagram style={{ color: "#ffcd9e" }} />
						<li style={{ color: "#282828" }}>.</li>
						<li>hello@dweep.io</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
