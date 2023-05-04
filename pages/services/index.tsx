import Head from "next/head";
import Link from "next/link";
// import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cta from "@/components/Cta";
import Services from "@/components/Services";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Rensogutma - Services Page</title>
      </Head>
      <Header />
      <main className="main">
        {/* breadcrumbs */}
        <div className="breadcrumbs">
          <div className="container" data-aos="fade">
            <h2>სერვისები</h2>
            <ol>
              <li>
                <Link href="/">მთავარი</Link>
              </li>
              <li>სერვისები</li>
            </ol>
          </div>
        </div>

        {/* services section */}
        <Services />

        {/* cta section */}
        <Cta />
      </main>
      <Footer />
    </>
  );
}
