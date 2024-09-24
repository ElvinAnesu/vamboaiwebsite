import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const CircleText = ({ text }) => {
	const textRef = useRef(null);

	useEffect(() => {
		if (textRef.current) {
			const textElement = textRef.current;
			textElement.innerHTML = textElement.textContent.replace(/\S/g, "<span>$&</span>");
			const spanElements = textElement.querySelectorAll("span");
			spanElements.forEach((span, i) => {
				span.style.transform = `rotate(${i * 15.5}deg)`;
			});
		}
	}, [text]);

	return (
		<span className="circle-btn__text" ref={textRef}>
			{text}
		</span>
	);
};

CircleText.propTypes = {
	text: PropTypes.string.isRequired,
};

export default CircleText;
