import React from "react";
import "./Details.css";
import HeroImage from "../assets/Vector.jpg";
import { useState } from "react";

const Details = () => {
	const [info, setInfo] = useState(false);
	const [email, setEmail] = useState("");
	function isEmailValid(email) {
		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return regex.test(email);
	}
	const register = (e) => {
		e.preventDefault();
		if (isEmailValid(email)) {
			setInfo(true);
		} else {
			alert("Please enter a valid E-mail !");
			setInfo(false);
		}
	};
	const emailChange = (e) => {
		setEmail(e.target.value);
	};

	return (
		<>
			<div className="Details">
				<div className="heading">
					An inspiring design delivered to your inbox every morning
				</div>
				<p>
					Our team scouts the internet for the best designs, illustrations and
					art and delivers a truly inspiring one every day to your inbox
				</p>

				{info ? (
					<span className="thank-you">Thank You !</span>
				) : (
					<>
						<div className="showMe">Show me how it looks</div>
						<div className="Form">
							<input
								type="text"
								placeholder="Your e-mail address"
								value={email}
								onChange={emailChange}
							/>
							<button className="register" onClick={register}>
								Register Now
							</button>
						</div>
					</>
				)}
				<div className="white-text">Free - No Spam - No Data Sharing</div>
				<img src={HeroImage} alt="hero-img" />
			</div>
		</>
	);
};

export default Details;
