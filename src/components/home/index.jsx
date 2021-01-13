import sliderIcon from '../../assets/images/slider-icon.png'

function Home(){
    return(
        <div className="welcome-area" id="welcome">

        {/* <!-- ***** Header Text Start ***** --> */}
        <div className="header-text">
            <div className="container">
                <div className="row">
                    <div className="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter left move 30px over 0.6s after 0.4s">
                        <h1>Art Factory is free <strong>for YOU</strong></h1>
                        <p>This template is available for 100% free of charge on TemplateMo. Download, modify and use this for your business website.</p>
                        <a href="#about" className="main-button-slider">Find Out More</a>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12" data-scroll-reveal="enter right move 30px over 0.6s after 0.4s">
                        <img src={sliderIcon} className="rounded img-fluid d-block mx-auto" alt="First Vector Graphic"/>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ***** Header Text End ***** --> */}
    </div>
    )
}

export default Home