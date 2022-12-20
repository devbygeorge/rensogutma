import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export default function Header() {
  // Toggle mobile navbar
  function mobileNavToogle() {
    document.querySelector("body")?.classList.toggle("mobile-nav-active");
    document.querySelector(".mobile-nav-show")?.classList.toggle("d-none");
    document.querySelector(".mobile-nav-hide")?.classList.toggle("d-none");
  }

  function handleNavLink() {
    if (document.querySelector(".mobile-nav-active")) {
      // Shrink all expanded dropdowns
      document
        .querySelectorAll(".navbar .dropdown .active")
        .forEach((navbarlink) => {
          handleDropdown(navbarlink);
        });
      // Hide navbar after page redirect
      mobileNavToogle();
    }
  }

  // expand and shrink for dropdowns
  function handleDropdown(link: any) {
    if (document.querySelector(".mobile-nav-active")) {
      let linkElem = link;

      if (link.target.tagName === "A") {
        link.preventDefault();
        linkElem = link.target;
      }

      if (link.target.tagName === "I") {
        link.preventDefault();
        linkElem = link.target.parentElement;
      }

      if (link.target.tagName === "SPAN") {
        linkElem = link.target.parentElement;
        handleNavLink();
        return;
      }

      linkElem.classList.toggle("active");
      linkElem.nextElementSibling.classList.toggle("dropdown-active");

      let dropDownIndicator = linkElem.querySelector(".dropdown-indicator");
      dropDownIndicator.classList.toggle("bi-chevron-up");
      dropDownIndicator.classList.toggle("bi-chevron-down");
    }
  }

  useEffect(() => {
    // add hide navbar after redirect to all links
    document.querySelectorAll("#navbar a").forEach((navbarlink) => {
      // add the event listener
      navbarlink.addEventListener("click", handleNavLink);
      // remove the event listener when the component unmounts
      return () => {
        navbarlink.removeEventListener("click", handleNavLink);
      };
    });

    // add expand/shrink for all dropdown links
    document.querySelectorAll(".navbar .dropdown > a").forEach((navbarlink) => {
      // do not hide navbar after dropdown links clicked
      navbarlink.removeEventListener("click", handleNavLink);

      // add the event listener
      navbarlink.addEventListener("click", handleDropdown);
      // remove the event listener when the component unmounts
      return () => {
        navbarlink.removeEventListener("click", handleDropdown);
      };
    });
  }, []);

  return (
    <header className="header" id="header">
      {/* introduction */}
      <div className="welcome-area">
        <span>მოგესალმებით ჩვენს ვებგვერდზე</span>
      </div>

      {/* logo area */}
      <div className="logo-wrapper">
        <Link href="/" className="logo">
          <img src="/images/logo.png" alt="Rensogutma" />
        </Link>
      </div>

      {/* header info items */}
      <ul className="info-list">
        <li>
          <img src="/images/icons/icon-1.png" alt="clock" />
          <strong>სამუშაო საათები</strong>
          <span>08:30 - 18:30</span>
        </li>
        <li>
          <img src="/images/icons/icon-2.png" alt="call" />
          <strong>დაგვირეკეთ</strong>
          <span>+90 (212) 235 55 78</span>
        </li>
        <li>
          <img src="/images/icons/icon-3.png" alt="mail" />
          <strong>მოგვწერეთ</strong>
          <span>info@rensogutma.com</span>
        </li>
      </ul>

      {/* navbar area */}
      <nav className="navbar" id="navbar">
        <ul>
          <li className="dropdown">
            <Link href="about">
              <span>ჩვენს შესახებ</span>
              <i className="bi bi-chevron-down dropdown-indicator"></i>
            </Link>
            <ul>
              <li>
                <Link href="/laws">შინაგანაწესი</Link>
              </li>
              <li>
                <Link href="/partners">პარტნიორები</Link>
              </li>
            </ul>
          </li>

          {/* product categories start */}
          {/* <li className="dropdown">
            <Link href="/product-groups">
              <span>პროდუქცია</span>
              <i className="bi bi-chevron-down dropdown-indicator"></i>
            </Link>
            <ul>
              {data.productCategories.data.map((category, index) =>
                category.attributes.product_subcategories.data.length ? (
                  <li className="dropdown" key={index}>
                    <Link href={"/category/" + category.id}>
                      <span>{category.attributes.title}</span>
                      <i className="bi bi-chevron-down dropdown-indicator"></i>
                    </Link>
                    <ul>
                      {category.attributes.product_subcategories.data.map(
                        (subcategory, index) => (
                          <li key={index}>
                            <Link href={`/subcategory/${subcategory.id}`}>
                              {subcategory.attributes.title}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  </li>
                ) : (
                  <li key={index}>
                    <Link href={"/category/" + category.id}>
                      {category.attributes.title}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </li> */}
          {/* product categories end */}

          <li className="dropdown">
            <Link href="/services">
              <span>სერვისები</span>
              <i className="bi bi-chevron-down dropdown-indicator"></i>
            </Link>
            <ul>
              <li>
                <Link href="/services/1">მშენებლობა</Link>
              </li>
              <li>
                <Link href="/services/2">მომსახურება</Link>
              </li>
              <li>
                <Link href="/services/3">პროექტირება</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/projects">პროექტები</Link>
          </li>
          <li>
            <Link href="/gallery">გალერეა</Link>
          </li>
          <li>
            <Link href="/blogs">ბლოგი</Link>
          </li>
          <li>
            <Link href="/contact">კონტაქტი</Link>
          </li>
        </ul>
      </nav>

      {/* mobile navbar */}
      <div className="mobile-nav">
        <i
          onClick={mobileNavToogle}
          className="mobile-nav-toggle mobile-nav-show bi bi-list"
        ></i>
        <i
          onClick={mobileNavToogle}
          className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"
        ></i>
      </div>
    </header>
  );
}
