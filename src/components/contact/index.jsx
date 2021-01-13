function Contact() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* <!-- ***** Contact Map Start ***** --> */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div id="map">
            {/* <!-- How to change your own map point
                           1. Go to Google Maps
                           2. Click on your location point
                           3. Click "Share" and choose "Embed map" tab
                           4. Copy only URL and paste it within the src="" field below
                    --> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907"
              style={{width:"100%",height:"500px"}}
              // width="100%"
              // height="500px"
              // frameborder="0"
              // style="border:0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        {/* <!-- ***** Contact Map End ***** --> */}

        {/* <!-- ***** Contact Form Start ***** --> */}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="contact-form">
            <form id="contact" action="" method="post">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="name"
                      type="text"
                      id="name"
                      placeholder="Full Name"
                      required=""
                      className="contact-field"
                    />
                  </fieldset>
                </div>
                <div className="col-md-6 col-sm-12">
                  <fieldset>
                    <input
                      name="email"
                      type="text"
                      id="email"
                      placeholder="E-mail"
                      required=""
                      className="contact-field"
                    />
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <textarea
                      name="message"
                      rows="6"
                      id="message"
                      placeholder="Your Message"
                      required=""
                      className="contact-field"
                    ></textarea>
                  </fieldset>
                </div>
                <div className="col-lg-12">
                  <fieldset>
                    <button
                      type="submit"
                      id="form-submit"
                      className="main-button"
                    >
                      Send It
                    </button>
                  </fieldset>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* <!-- ***** Contact Form End ***** --> */}
      </div>
    </div>
  );
}

export default Contact;
