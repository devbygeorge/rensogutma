import Isotope from "isotope-layout";
import imagesLoaded from "imagesloaded";

export function initIsotope() {
  const glightbox = require("glightbox");
  glightbox();

  imagesLoaded(".grid-isotope", function () {
    let gridIsotope = document.querySelector(".grid-isotope");

    // if (gridIsotope) {
    //   let iso = new Isotope(gridIsotope, {
    //     itemSelector: ".grid-item",
    //     layoutMode: "masonry",
    //     filter: "*",
    //     sortBy: "original-order",
    //   });

    //   return () => iso.destroy();
    // }
  });
}
