import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

document.getElementById(
  "footer-credit-year"
).innerText = `${new Date().getFullYear()}`;
initScrollReveal(targetElements, defaultProps);
initTiltEffect();
