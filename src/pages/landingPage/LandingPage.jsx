import React from "react";

// custom components
import Nav from "../../components/nav";
import Home from "../../components/home";
import About from "../../components/about";
import Feature from "../../components/about/Feature";
import Service from "../../components/services";
import FAQ from "../../components/FAQ";
import Contact from "../../components/contact";
import Footer from "../../components/Footer";

function LandingPage() {
  return (
    <div>
      {/* // <!-- ***** Preloader Start ***** --> */}
      {/* <div id="preloader">
        <div className="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      {/* // <!-- ***** Preloader End ***** --> */}

      {/* // <!-- ***** Header Area Start ***** --> */}

      {/* // <!-- ***** Header Area End ***** --> */}
      <Nav />

      {/* // <!-- ***** Welcome Area Start ***** --> */}
      <Home />
      {/* <!-- ***** Welcome Area End ***** --> */}

      {/* <!-- ***** Features Big Item Start ***** --> */}
      <section className="section" id="about">
        <About />
      </section>

      {/* <!-- ***** Features Big Item End ***** --> */}
      <section className="section" id="about2">
        <Feature />
      </section>
      {/* <!-- ***** Features Big Item Start ***** --> */}

      {/* <!-- ***** Features Big Item End ***** --> */}

      {/* <!-- ***** Features Small Start ***** --> */}
      <section className="section" id="services">
        <Service />
      </section>
      {/* <!-- ***** Features Small End ***** --> */}

      {/* <!-- ***** Frequently Question Start ***** --> */}
      <section className="section" id="frequently-question">
        <FAQ />
      </section>
      {/* <!-- ***** Frequently Question End ***** --> */}

      {/* <!-- ***** Contact Us Start ***** --> */}
      <section className="section" id="contact-us">
        <Contact />
      </section>
      {/* <!-- ***** Contact Us End ***** --> */}

      {/* <!-- ***** Footer Start ***** --> */}
      <Footer />
    </div>
  );
}

export default LandingPage;
