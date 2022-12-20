import { useEffect } from "react";
import type { AppProps } from "next/app";

// import vendor files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "glightbox/dist/css/glightbox.min.css";

// import custom utilities
import { initAOS } from "@/util/aos";

// import global & components styles
import "@/styles/globals.scss";
import "@/styles/components/Header.scss";
import "@/styles/components/Footer.scss";
import "@/styles/components/About.scss";
import "@/styles/components/Cta.scss";
import "@/styles/components/FeaturedProducts.scss";
import "@/styles/components/Hero.scss";
import "@/styles/components/LeaveComment.scss";
import "@/styles/components/ProductGroups.scss";
import "@/styles/components/RecentBlogs.scss";
import "@/styles/components/RecentProjects.scss";
import "@/styles/components/ReferencesSwiper.scss";
import "@/styles/components/ServicePage.scss";

// import pages styles
import "@/styles/pages/AboutPage.scss";
import "@/styles/pages/BlogPage.scss";
import "@/styles/pages/BlogsPage.scss";
import "@/styles/pages/CategoryPage.scss";
import "@/styles/pages/ContactPage.scss";
import "@/styles/pages/GalleryPage.scss";
import "@/styles/pages/ProductPage.scss";
import "@/styles/pages/ProjectPage.scss";
import "@/styles/pages/ProjectsPage.scss";
import "@/styles/pages/ServicePage.scss";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initAOS();
  }, []);

  return <Component {...pageProps} />;
}
