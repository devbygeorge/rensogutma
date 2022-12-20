import AOS from "aos";
import "aos/dist/aos.css";

export function initAOS() {
  AOS.init({
    duration: 800,
    easing: "ease-in",
    once: true,
    mirror: false,
    offset: 0, // offset (in px) from the original trigger point
  });
}
