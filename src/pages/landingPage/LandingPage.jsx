import React from "react";

function LandingPage() {
  return (
    <div>
      {/* // <!-- ***** Preloader Start ***** --> */}
      <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      {/* // <!-- ***** Preloader End ***** --> */}

      {/* // <!-- ***** Header Area Start ***** --> */}

      {/* // <!-- ***** Header Area End ***** --> */}
      <Header />

      {/* // <!-- ***** Welcome Area Start ***** --> */}
      <Home />
      {/* <!-- ***** Welcome Area End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section className="section" id="about"></section>
      {/* <!-- ***** Features Big Item End ***** --> */}
      <section className="section" id="about2"></section>
      {/* <!-- ***** Features Big Item Start ***** --> */}

      {/* <!-- ***** Features Big Item End ***** --> */}

      {/* <!-- ***** Features Small Start ***** --> */}
      <section className="section" id="services"></section>
      {/* <!-- ***** Features Small End ***** --> */}

      {/* <!-- ***** Frequently Question Start ***** --> */}
      <section className="section" id="frequently-question"></section>
      {/* <!-- ***** Frequently Question End ***** --> */}

      {/* <!-- ***** Contact Us Start ***** --> */}
      <section className="section" id="contact-us"></section>
      {/* <!-- ***** Contact Us End ***** --> */}

      {/* <!-- ***** Footer Start ***** --> */}
    </div>
  );
}

export default LandingPage;
