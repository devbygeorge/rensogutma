// import Image from "next/image";

export default function LeaveComment() {
  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
  };

  return (
    <section className="leave-comment section-bg" id="leave-comment">
      <div className="container">
        <div className="row justify-content-between gy-4">
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="fade-up"
          >
            <div className="content">
              <h3>რას ამბობენ ჩვენზე?</h3>
              <p>
                "როგორც პარტნიორი, ჩვენ ძალიან მოხარულები ვართ REN SOĞUTMA-სთან
                მუშაობით. ჩვენი მოლოდინი ბაზრისგან ძალიან მაღალია, რის გამოც
                ჩვენ ვაფასებთ REN SOĞUTMA-ს სიჩქარეს და მოქნილობას ჩვენი
                პროექტების დროულად მიწოდებაში, თუნდაც უკიდურესად შეზღუდულ
                დროში.”
              </p>
              <h4>SARAL BALIKÇILIK</h4>
              <span>შესყიდვების მენეჯერი</span>
            </div>
          </div>
          <div className="col-lg-5" data-aos="fade">
            <form className="email-form" onSubmit={(e) => handleSubmit(e)}>
              <h3>დატოვე კომენტარი</h3>
              <div className="row gy-3">
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    placeholder="სახელი"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    placeholder="იმეილი"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    placeholder="ტელეფონი"
                    required
                  />
                </div>
                <div className="col-md-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="შეტყობინება"
                    required
                  ></textarea>
                </div>
                <div className="col-md-12 text-center">
                  <div className="loading">იტვირთება</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    თქვენი მოთხოვნა წარმატებით გაიგზავნა. გმადლობთ!
                  </div>
                  <button type="submit">გაგზავნა</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
