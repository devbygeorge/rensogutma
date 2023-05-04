import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FeaturedProducts from "@/components/FeaturedProducts";
import ProductGroups from "@/components/ProductGroups";
import RecentProjects from "@/components/RecentProjects";
import LeaveComment from "@/components/LeaveComment";
import PartnersSwiper from "@/components/PartnersSwiper";
import RecentBlogs from "@/components/RecentBlogs";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Rensogutma - Home Page</title>
      </Head>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Services />
        <FeaturedProducts />
        <ProductGroups />
        <RecentProjects />
        <LeaveComment />
        <PartnersSwiper />
        <RecentBlogs />
      </main>
      <Footer />
    </>
  );
}
