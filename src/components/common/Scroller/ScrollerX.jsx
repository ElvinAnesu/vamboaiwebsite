import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
const ScrollerX = ({ items, direction = "left", speed = "slow" }) => {
	const scrollerRef = useRef(null);
	useEffect(() => {
		const scrollers = scrollerRef.current.querySelectorAll(".scroller-x");

		scrollers.forEach((scroller) => {
			if (!scroller.hasAttribute("data-animated")) {
				scroller.setAttribute("data-animated", true);
				const scrollerInner = scroller.querySelector(".scroller-x__list");
				const scrollerContent = Array.from(scrollerInner.children);

				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true);
					duplicatedItem.setAttribute("aria-hidden", true);
					scrollerInner.appendChild(duplicatedItem);
				});
			}
		});
	}, [items]);
	return (
		<div ref={scrollerRef}>
			<div className="scroller-x" data-direction={direction} data-speed={speed}>
				<ul className="list list-row gap-4 scroller-x__list">
					{items.map((item) => (
						<li key={item.id}>
							<div className="brand-btn d-inline-block py-4 px-10 rounded-pill bg-neutral-10">
								<img src={item.src} alt={item.alt} className="img-fluid" />
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

ScrollerX.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		})
	).isRequired,
	direction: PropTypes.string,
	speed: PropTypes.string,
};
export default ScrollerX;
