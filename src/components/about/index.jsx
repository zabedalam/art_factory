import LeftImage from '../../assets/images/left-image.png'

function About() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="col-lg-7 col-md-12 col-sm-12"
          data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
        >
          <img
            src={LeftImage}
            className="rounded img-fluid d-block mx-auto"
            alt="App"
          />
        </div>
        <div className="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
          <div className="left-heading">
            <h5>Vivamus sodales nisi id ante molestie venenatis</h5>
          </div>
          <div className="left-text">
            <p>
              This template is <a href="#">last updated on 20 August 2019 </a>
              for main menu drop-down arrow and sub menu text color. Duis auctor
              dolor eu scelerisque vestibulum.<br/><br/> Vestibulum lacinia, nisl sit amet
              tristique condimentum. Sed a consequat velit. Morbi lectus sapien,
              vestibulum et sapien sit amet, ultrices malesuada odio. Donec non
              quam euismod, mattis dui a, ultrices nisi.
            </p>
            <a href="#about2" className="main-button">
              Discover More
            </a>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="hr"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
