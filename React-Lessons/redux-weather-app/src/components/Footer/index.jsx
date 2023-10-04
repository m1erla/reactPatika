import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkSwitch } from "../../redux/weatherSlice";

function Footer() {
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.weather.darkmode);
	const openUrl = (link) => {
		switch (link) {
			case "twitter":
				window.open("https://twitter.com/FurkanMierla", "_blank", "noreferrer");
				break;
			case "github":
				window.open("https://github.com/m1erla/Final-Case-Patika", "_blank", "noreferrer");
				break;
			case "linkedin":
				window.open("https://www.linkedin.com/in/furkan-karakus/", "_blank", "noreferrer");
				break;
			default:
				break;
		}
	};

	const themeHandler = () => {
		dispatch(darkSwitch());
		document.documentElement.setAttribute("data-theme", theme ? "light" : "dark");
	};

	return (
		<div className="footer">
			<div className="darkmode" onClick={themeHandler}>
				{theme ? "Light Mode" : "Dark Mode"}
			</div>
			<div className="icons">
				<FontAwesomeIcon icon={faTwitter} size="2x" onClick={() => openUrl("twitter")} />
				<FontAwesomeIcon icon={faGithub} size="2x" onClick={() => openUrl("github")} />
				<FontAwesomeIcon icon={faLinkedin} size="2x" onClick={() => openUrl("linkedin")} />
			</div>
			<p><strong>Created by m1erla</strong></p>
		</div>
	);
}

export default Footer;