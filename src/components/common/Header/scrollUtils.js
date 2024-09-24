// src/utils/scrollUtils.js

/**
 * Creates a debounced function that delays invoking the provided function until
 * after wait milliseconds have elapsed since the last time the debounced function was invoked.
 *
 * @param {Function} func - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @returns {Function} - The debounced function.
 */
export const debounce = (func, wait) => {
	let timeout;
	return function (...args) {
		const context = this;
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(context, args), wait);
	};
};

/**
 * Handles the scroll event for a given header reference. Adds or removes the 'header-crossed'
 * class from the body based on the scroll position.
 *
 * @param {Object} headerRef - The reference to the header element.
 * @returns {Function} - The scroll event handler function.
 */
export const handleScroll = (headerRef) => {
	return () => {
		if (!headerRef || !headerRef.current) {
			console.warn("Invalid headerRef provided to handleScroll");
			return;
		}
		const header = headerRef.current;
		const headerTop = header.offsetHeight / 3;
		const scrolled = window.scrollY;
		const body = document.body;
		if (scrolled > headerTop) {
			body.classList.add("header-crossed");
		} else {
			body.classList.remove("header-crossed");
		}
	};
};
