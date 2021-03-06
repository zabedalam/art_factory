import aboutIcon from '../../assets/images/about-icon-01.png'
import aboutIcon2 from '../../assets/images/about-icon-02.png'
import aboutIcon3 from '../../assets/images/about-icon-03.png'
import rightImage from '../../assets/images/right-image.png'


function Feature() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
            <div className="left-heading">
              <h5>Curabitur aliquam eget tellus id porta</h5>
            </div>
            <p>
              Proin justo sapien, posuere suscipit tortor in, fermentum mattis
              elit. Aenean in feugiat purus.
            </p>
            <ul>
              <li>
                <img src={aboutIcon} alt="" />
                <div className="text">
                  <h6>Nulla ultricies risus quis risus</h6>
                  <p>
                    You can use this website template for commercial or
                    non-commercial purposes.
                  </p>
                </div>
              </li>
              <li>
                <img src={aboutIcon2} alt="" />
                <div className="text">
                  <h6>Donec consequat commodo purus</h6>
                  <p>
                    You have no right to re-distribute this template as a
                    downloadable ZIP file on any website.
                  </p>
                </div>
              </li>
              <li>
                <img src={aboutIcon3} alt="" />
                <div className="text">
                  <h6>Sed placerat sollicitudin mauris</h6>
                  <p>
                    If you have any question or comment, please
                    <a rel="nofollow" href="https://templatemo.com/contact">
                      contact
                    </a>{" "}
                    us on TemplateMo.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div
            className="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big"
            data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
          >
            <img
              src={rightImage}
              className="rounded img-fluid d-block mx-auto"
              alt="App"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
