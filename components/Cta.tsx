// import Image from "next/image";

export default function Cta() {
  return (
    <section className="cta" id="cta" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <p className="cta-text">
              <strong>დაგვიკავშირდით,</strong> ჩვენი პროდუქტებისა და სერვისების
              შესახებ დეტალური ინფორმაციის მისაღებად!
            </p>
          </div>
          <div className="col-lg-4">
            <div className="cta-info">
              <span className="cta-num">0(212) 235 55 78</span>
              <a className="cta-btn" href="tel:123-456-7890">
                დარეკე ახლავე
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
