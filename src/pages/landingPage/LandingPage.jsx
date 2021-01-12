import React from "react"

function LandingPage(){
    return(
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
<Header/>

    {/* // <!-- ***** Welcome Area Start ***** --> */}
    <Home/>
    {/* <!-- ***** Welcome Area End ***** --> */}


    {/* <!-- ***** Features Big Item Start ***** --> */}
    <section className="section" id="about">

    </section>
    {/* <!-- ***** Features Big Item End ***** --> */}
    <section className="section" id="about2">

    </section>
    {/* <!-- ***** Features Big Item Start ***** --> */}
    
    {/* <!-- ***** Features Big Item End ***** --> */}


    {/* <!-- ***** Features Small Start ***** --> */}
    <section className="section" id="services">
       
    </section>
    {/* <!-- ***** Features Small End ***** --> */}


    {/* <!-- ***** Frequently Question Start ***** --> */}
    <section className="section" id="frequently-question">
        <div className="container">
            <!-- ***** Section Title Start ***** -->
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                </div>
                <div className="offset-lg-3 col-lg-6">
                    <div className="section-heading">
                        <p>Vivamus venenatis eu mi ac mattis. Maecenas ut elementum sapien. Nunc euismod risus ac lobortis congue. Sed erat quam.</p>
                    </div>
                </div>
            </div>
            {/* <!-- ***** Section Title End ***** --> */}

            <div className="row">
                <div className="left-text col-lg-6 col-md-6 col-sm-12">
                    <h5>className aptent taciti sociosqu ad litora torquent per conubia</h5>
                    <div className="accordion-text">
                        <p>Curabitur placerat diam in risus lobortis, laoreet porttitor est elementum. Nulla ultricies risus quis risus scelerisque, a aliquam tellus maximus. Cras pretium nulla ac convallis iaculis. Aenean bibendum erat vitae odio sodales, in facilisis tellus volutpat.</p>
                        <p>Sed lobortis pellentesque magna ac congue. Suspendisse quis molestie magna, id eleifend ex. Ut mollis ultricies diam nec dictum. Morbi commodo hendrerit mi vel vulputate. Proin non tincidunt dui. Lorem ipsum dolor sit amet.</p>
                        <span>Email: <a href="#">email@company.com</a><br></span>
                        <a href="#contact-us" className="main-button">Contact Us</a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="accordions is-first-expanded">
                        <article className="accordion">
                            <div className="accordion-head">
                                <span>First Common Question</span>
                                <span className="icon">
                                    <i className="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div className="accordion-body">
                                <div className="content">
                                    <p>Duis vulputate porttitor urna sit amet pretium. Phasellus sed pulvinar eros, condimentum consequat ex. Suspendisse potenti.
                                    <br><br>
                                    Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat.</p>
                                </div>
                            </div>
                        </article>
                        <article className="accordion">
                            <div className="accordion-head">
                                <span>Second Question Answer</span>
                                <span className="icon">
                                    <i className="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div className="accordion-body">
                                <div className="content">
                                    <p>Sed odio elit, cursus sed consequat at, rutrum eget augue. Cras ac eros iaculis, tempor quam sit amet, scelerisque mi. Quisque eu risus eget nunc porttitor vestibulum at a ante.
                                    <br><br>
                                    Praesent ut placerat turpis, vel pellentesque dolor. Sed rutrum eleifend tortor, eu luctus orci sagittis in. In blandit fringilla mollis.</p>
                                </div>
                            </div>
                        </article>
                        <article className="accordion">
                            <div className="accordion-head">
                                <span>Third Answer for you</span>
                                <span className="icon">
                                    <i className="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div className="accordion-body">
                                <div className="content">
                                    <p>Proin feugiat ante ut vulputate rutrum. Nam quis erat turpis. Nullam maximus pharetra lorem, eu condimentum est iaculis ut. Pellentesque mattis ultrices dignissim. 
                                    <br><br>
                                    Etiam et enim finibus, feugiat massa efficitur, finibus sapien. Sed cursus lacus quis arcu scelerisque, eget ornare risus maximus. Aenean non lectus id odio rhoncus pharetra.</p>
                                </div>
                            </div>
                        </article>
                        <article className="accordion">
                            <div className="accordion-head">
                                <span>Fourth Question Asked</span>
                                <span className="icon">
                                    <i className="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div className="accordion-body">
                                <div className="content">
                                    <p>Phasellus eu purus ornare, eleifend orci nec, egestas nulla. Sed sed aliquet sapien. Proin placerat, ipsum eu posuere blandit, tellus quam consectetur nisi, id sollicitudin diam ex at nisi.
                                    <br><br>
                                    Aenean fermentum eget turpis egestas semper. Sed finibus mollis venenatis. Praesent at sem in massa iaculis pharetra.</p>
                                </div>
                            </div>
                        </article>
                        <article className="accordion">
                            <div className="accordion-head">
                                <span>Fifth Ever Question</span>
                                <span className="icon">
                                    <i className="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div className="accordion-body">
                                <div className="content">
                                    <p>Quisque aliquet ipsum ut magna rhoncus, euismod lacinia elit rhoncus. Sed sapien elit, mollis ut ultricies quis, fermentum nec ante.
                                    <br><br>
                                    Sed nec ex nec tortor fermentum sollicitudin id ut ligula. Ut sagittis rutrum lectus, non sagittis ante euismod eu. </p>
                                </div>
                            </div>
                        </article>
                        <article className="accordion">
                            <div className="accordion-head">
                                <span>Sixth Sense Question</span>
                                <span className="icon">
                                    <i className="icon fa fa-chevron-right"></i>
                                </span>
                            </div>
                            <div className="accordion-body">
                                <div className="content">
                                    <p>Suspendisse potenti. Ut dapibus leo ut massa vulputate semper. Pellentesque maximus lorem sed elit imperdiet mattis. Duis posuere mauris ut eros rutrum sodales. Aliquam erat volutpat.</p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ***** Frequently Question End ***** --> */}


    {/* <!-- ***** Contact Us Start ***** --> */}
    <section className="section" id="contact-us">
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
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1197183.8373802372!2d-1.9415093691103689!3d6.781986417238027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb96f349e85efd%3A0xb8d1e0b88af1f0f5!2sKumasi+Central+Market!5e0!3m2!1sen!2sth!4v1532967884907" width="100%" height="500px" frameborder="0" style="border:0" allowfullscreen></iframe>
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
                                <input name="name" type="text" id="name" placeholder="Full Name" required="" className="contact-field"/>
                              </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="email" type="text" id="email" placeholder="E-mail" required="" className="contact-field"/>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6" id="message" placeholder="Your Message" required="" className="contact-field"></textarea>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="main-button">Send It</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
                {/* <!-- ***** Contact Form End ***** --> */}
            </div>
        </div>
    </section>
    {/* <!-- ***** Contact Us End ***** --> */}

    
    {/* <!-- ***** Footer Start ***** --> */}
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-12 col-sm-12">
                    <p className="copyright">Copyright &copy; 2020 Art Factory Company 
                
                . Design: <a rel="nofollow" href="https://templatemo.com">TemplateMo</a></p>
                </div>
                <div className="col-lg-5 col-md-12 col-sm-12">
                    <ul className="social">
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-rss"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    

  
        
    
   </div> )
}

export default LandingPage