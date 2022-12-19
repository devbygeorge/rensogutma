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
import ReferencesSwiper from "@/components/ReferencesSwiper";
import RecentNews from "@/components/RecentNews";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>rensogutma - home page</title>
        <meta name="description" content="rensogutma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
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
        <ReferencesSwiper />
        <RecentNews />
      </main>
      <Footer />
    </>
  );
}
