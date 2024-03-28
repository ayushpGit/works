import React from "react";
// import "../styles/plugins.min.css";
import "../styles/styles.css";

const Home = () => {
  return (
    <>
      <body>
        <div
          class="preloader"
          style={{
            display: "none",
          }}
        >
          <div class="anim pulse">
            <i class="ion-ios-bolt-outline"></i>
          </div>
        </div>
        <div class="preloader-left slide-left"></div>
        <div class="inline-menu-container">
          <span class="status">
            I am available at{" "}
            <a href="https://www.crocuspearl.com" target="_blank">
              Crocus Pearl Technologies Pvt. Ltd.
            </a>{" "}
          </span>
          <ul
            style={{
              listStyleType: "disc",
              marginLeft: "25px",
            }}
            class="inline-menu"
          >
            <li class="about menu-item">Resume</li>
            <li class="RetroGames menu-item">RetroGames</li>
            <li class="SecurityTips menu-item">SecurityTips</li>
            <li class="contact menu-item">Contact</li>
            <li id="close" class="menu-item">
              <i class="ion-ios-close-empty"></i>
            </li>
          </ul>
        </div>
        <section class="home">
          <div id="particles-js"></div>
          <div class="container">
            <div class="name-block">
              <div class="name-block-container">
                <h1>
                  <span>Hi, I'm</span>Ayush Bhakta Pradhanang
                </h1>
                <h2>COO | Cyber Security</h2>
                <h3>
                  <a
                    href="https://np.linkedin.com/in/ayush-pradhanang-5b5227130"
                    target="_blank"
                  >
                    <i class="ion-social-linkedin"></i>
                  </a>
                </h3>
              </div>
            </div>
            <div class="menu-blocks">
              <div class="about-block menu-block">
                <div class="about-block-container">
                  <h2 class="about menu-item">Resume</h2>
                </div>
              </div>
              <div class="RetroGames-block  menu-block">
                <div class="RetroGames-block-container">
                  <h2 class="RetroGames menu-item">Retro Games</h2>
                </div>
              </div>
              <div class="SecurityTips-block  menu-block">
                <div class="SecurityTips-block-container">
                  <h2 class="SecurityTips menu-item">
                    Cyber Security Books &amp; Tips{" "}
                  </h2>
                </div>
              </div>
              <div class="contact-block  menu-block">
                <div class="contact-block-container">
                  <h2 class="contact menu-item">Contact</h2>
                </div>
              </div>
            </div>
            <div class="content-blocks about">
              <section class="content" id="about">
                <div class="block-content margin-0">
                  <h3 class="block-title">Profile</h3>
                  <h3 class="subheading">
                    It is my pleasure to introduce myself as the{" "}
                    <strong>
                      {" "}
                      Director &amp; COO of Crocus Pearl Technologies{" "}
                    </strong>
                    in Kathmandu, Nepal.
                  </h3>
                  <p>
                    The purpose of this section is to provide free tips and
                    books that can make a difference in your life through
                    creative solutions. Listed below are some free retro games
                    that you can play. I welcome your email or application to
                    Crocus Pearl Technologies.
                  </p>

                  <div class="info-list row">
                    <div class="col-sm-6">
                      <span>Name : </span> Ayush B. Pradhanang
                    </div>
                    <div class="col-sm-6">
                      <span>Address : </span> Kathmandu, Nepal.
                    </div>
                    <div class="col-sm-6">
                      <span>Email : </span> ayush@crocuspearl.com
                    </div>
                  </div>
                  <img class="sign" src="images/signature.png" alt="" />
                </div>
                <div class="block-content">
                  <h3 class="block-title">Experience</h3>
                  <div class="timeline experience">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="exp-holder">
                          <div class="exp">
                            <div class="hgroup">
                              <h4>
                                <span>Academic Tutor</span> @ Islington College
                                Pvt. Ltd.
                              </h4>
                              <h5>
                                Jul 2023 - <span class="current">Present</span>
                              </h5>
                            </div>
                            {/* <ul 
                              style={{
                                listStyleType: "disc",
                                marginLeft: "25px",
                              }}> */}
                            <ul
                              style={{
                                listStyleType: "disc",
                                marginLeft: "25px",
                              }}
                            >
                              <li>
                                Assisting students at Islington college in terms
                                of cloud computing and IoT.
                              </li>
                              <li>
                                Guide students in thier Final Year Project
                                (FYP)to help them develop a fruitful product.
                              </li>
                            </ul>
                          </div>
                          <div class="exp">
                            <div class="hgroup">
                              <h4>
                                <span>Director/COO</span> @ Crocus Pearl
                                Technologies Pvt. Ltd.
                              </h4>
                              <h5>
                                Nov 2022 - <span class="current">Present</span>
                              </h5>
                            </div>
                            <ul
                              style={{
                                listStyleType: "disc",
                                marginLeft: "25px",
                              }}
                            >
                              <li>
                                Driving the companys operating capabilities to
                                surpass customer satisfaction and retention, and
                                company goals.
                              </li>
                              <li>
                                Controlling company costs, and introducing
                                tactical initiatives to address theft and other
                                losses.
                              </li>
                              <li>
                                Monitoring invoices, money handling procedures,
                                accounting, and bank processes.
                              </li>
                            </ul>
                          </div>
                          <div class="exp">
                            <div class="hgroup">
                              <h4>
                                <span>Project Manager</span> @ Kazi Studios Pvt.
                                Ltd.
                              </h4>
                              <h5>Sep 2021 - Aug 2022</h5>
                            </div>
                            <ul
                              style={{
                                listStyleType: "disc",
                                marginLeft: "25px",
                              }}
                            >
                              <li>
                                Determine and define project scope and
                                objectives.
                              </li>
                              <li>
                                Prepare and track budget based on scope of work
                                and resource requirements.
                              </li>
                              <li>
                                Develop and manage a detailed project schedule
                                and work plan.
                              </li>
                              <li>
                                Manage contracts with vendors and suppliers by
                                assigning tasks and communicating expected
                                deliverables.
                              </li>
                              <li>
                                Utilize industry best practices, techniques, and
                                standards throughout entire project execution.
                              </li>
                            </ul>
                          </div>
                          <div class="exp">
                            <div class="hgroup">
                              <h4>
                                <span>Technical Sales Representative</span> @
                                Octacore Solutions Pvt. Ltd.{" "}
                              </h4>
                              <h5>Jan 2019 - Oct 2021</h5>
                            </div>
                            <ul
                              style={{
                                listStyleType: "disc",
                                marginLeft: "25px",
                              }}
                            >
                              <li>
                                Installing Virtual Machine (VMware ESXi) and Its
                                Maintenances.
                              </li>
                              <li>
                                Server, Desktop and Laptop Maintenances and
                                Software and Hardware repair.
                              </li>
                              <li>
                                System Administrator on LinuxOS, dealing with
                                Clients and Troubleshooting.
                              </li>
                              <li>
                                Participate in tender process from compiling
                                document for the bid, attend the bid procedure.{" "}
                              </li>
                              <li>
                                Used Oracle Form 6i to build Forms and Generate
                                Reports.
                              </li>
                              <li>
                                Installing Oracle on Oracle Linux System and
                                basic level SQL and PL/SQL for Database.: Oracle
                                Database 12c, Oracle WeSecurityTipsic 12c Oracle
                                Form and Report 12c
                              </li>
                            </ul>
                          </div>
                          <div class="exp">
                            <div class="hgroup">
                              <h4>
                                <span>Intern</span> @ Data|Hub Pvt. Ltd.{" "}
                              </h4>
                              <h5> Aug 2018 - Dec 2018</h5>
                            </div>
                            <ul
                              style={{
                                listStyleType: "disc",
                                marginLeft: "25px",
                              }}
                            >
                              <li>
                                Monitoring of network performance using network
                                monitoring tools such as (MRTG, Nagios,Zabbix &
                                Smoking ping).
                              </li>
                              <li>
                                Preform backup of the servers and manage cloud
                                storage using VPC. Used VMS (Virtual Memory
                                System) to create an illusion of a very large
                                memory.
                              </li>
                              <li>
                                HAPoxy for Load balancing, Keep-Alive to keep
                                System running with the help of LAMP.
                                (Ngix,MySQl,Linux,PHP) on Linux system.
                              </li>
                              <li>Client Support with troubleshooting.</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="block-content">
                  <h3 class="block-title">Education</h3>
                  <div class="timeline education">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="exp-holder">
                          <div class="exp">
                            <div class="hgroup">
                              <h4>
                                <span>Islington College Pvt. Ltd.</span>
                              </h4>
                              <h5>2020 - 2022</h5>
                            </div>
                            <p>
                              Master of Science Information Technology and
                              Applied Security
                            </p>
                          </div>
                          <div class="exp">
                            <div class="hgroup">
                              <h4>
                                <span>Islington College Pvt. Ltd.</span>
                              </h4>
                              <h5>2016 - 2019</h5>
                            </div>
                            <p>
                              BSc(Hons) in Computer Networking & IT Security
                            </p>
                          </div>
                          <div class="exp">
                            <div class="hgroup">
                              <h4>
                                <span>Alok Vidyashram</span>
                              </h4>
                              <h5>2013 - 2015</h5>
                            </div>
                            <p>C.B.S.E | +2 Science</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="block-content">
                  <h3 class="block-title">
                    Services Provided by{" "}
                    <a href="https://www.crocuspearl.com" target="_blank">
                      Crocus Pearl Technologies Pvt. Ltd.
                    </a>
                  </h3>
                  <div class="row">
                    <div class="col-md-4 col-sm-6 service">
                      <div class="service-icon">
                        <i class="ion-laptop"></i>
                      </div>
                      <h4>Web Development</h4>
                    </div>
                    <div class="col-md-4 col-sm-6 service">
                      <div class="service-icon">
                        <i class="ion-pie-graph"></i>
                      </div>
                      <h4>Mobile App Development</h4>
                    </div>
                    <div class="col-md-4 col-sm-6 service">
                      <div class="service-icon">
                        <i class="ion-paintbucket"></i>
                      </div>
                      <h4>Graphic Design</h4>
                    </div>
                    <div class="col-md-4 col-sm-6 service">
                      <div class="service-icon">
                        <i class="ion-printer"></i>
                      </div>
                      <h4>Print Design</h4>
                    </div>
                    <div class="col-md-4 col-sm-6 service">
                      <div class="service-icon">
                        <i class="ion-qr-scanner"></i>
                      </div>
                      <h4>Digital Marketing</h4>
                    </div>
                    <div class="col-md-4 col-sm-6 service">
                      <div class="service-icon">
                        <i class="ion-social-buffer"></i>
                      </div>
                      <h4>Branding</h4>
                    </div>
                  </div>
                </div>

                <div class="row text-center">
                  <div class="col-md-12 btn-email">
                    <a class="btn lowercase" href="mailto:me@ayushbp.com">
                      me@ayushbp.com
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div class="content-blocks RetroGames">
              <section class="content">
                <div class="block-content">
                  <h3 class="block-title">Retro Games</h3>
                  <div class="row">
                    <div class="col-md-12">
                      <div>
                        <h1>Coming Soon ...</h1>
                      </div>
                      <div
                        class="RetroGames-container row isotope"
                        id="RetroGames-container"
                        // style="position: relative; height: 606.313px;"
                        style={{ position: "relative", height: "606.313px" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="row text-center">
                  <div class="col-md-12 btn-email">
                    <a class="btn lowercase" href="mailto:me@ayushbp.com">
                      me@ayushbp.com
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div class="content-blocks SecurityTips">
              <section class="content">
                <div class="block-content">
                  <h3 class="block-title">My Security Tips &amp; Books</h3>
                  <h1>Coming Soon ...</h1>
                </div>
                <div class="row text-center">
                  <div class="col-md-12 btn-email">
                    <a class="btn lowercase" href="mailto:me@ayushbp.com">
                      me@ayushbp.com
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div class="content-blocks contact">
              <section class="content">
                <div class="block-content">
                  <h3 class="block-title">Get in touch</h3>
                  <div class="row">
                    <div class="col-md-6">
                      <form
                        class="contact-form bv-form"
                        action="php/send_mail.php"
                        method="post"
                        id="contact_form"
                        novalidate="novalidate"
                      >
                        <button
                          type="submit"
                          class="bv-hidden-submit"
                          style={{
                            display: "none",
                            width: "0px",
                            height: "0px",
                          }}
                        ></button>
                        <div class="form-control-wrap">
                          <div
                            id="message"
                            class="alert alert-danger alert-dismissible fade"
                          ></div>
                          <div class="form-group has-feedback">
                            <input
                              type="text"
                              class="form-control"
                              id="fname"
                              placeholder="Name*"
                              name="fname"
                              data-bv-field="fname"
                            />
                            <i
                              class="form-control-feedback bv-no-label"
                              data-bv-icon-for="fname"
                              style={{
                                display: "none",
                              }}
                            ></i>
                            <small
                              class="help-block"
                              data-bv-validator="stringLength"
                              data-bv-for="fname"
                              data-bv-result="NOT_VALIDATED"
                              style={{
                                display: "none",
                              }}
                            >
                              Please enter a value with valid length
                            </small>
                            <small
                              class="help-block"
                              data-bv-validator="notEmpty"
                              data-bv-for="fname"
                              data-bv-result="NOT_VALIDATED"
                              style={{
                                display: "none",
                              }}
                            >
                              Please enter your name
                            </small>
                          </div>
                          <div class="form-group mar-top-40 has-feedback">
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              placeholder="Email*"
                              name="email"
                              data-bv-field="email"
                            />
                            <i
                              class="form-control-feedback bv-no-label"
                              data-bv-icon-for="email"
                              style={{
                                display: "none",
                              }}
                            ></i>
                            <small
                              class="help-block"
                              data-bv-validator="notEmpty"
                              data-bv-for="email"
                              data-bv-result="NOT_VALIDATED"
                              style={{
                                display: "none",
                              }}
                            >
                              Please enter your email address
                            </small>
                            <small
                              class="help-block"
                              data-bv-validator="emailAddress"
                              data-bv-for="email"
                              data-bv-result="NOT_VALIDATED"
                              style={{
                                display: "none",
                              }}
                            >
                              Please enter a valid email address
                            </small>
                          </div>
                          <div class="form-group mar-top-60 has-feedback">
                            <textarea
                              class="form-control"
                              rows="10"
                              name="comment"
                              id="comment"
                              placeholder="Your Message"
                              data-bv-field="comment"
                            ></textarea>
                            <i
                              class="form-control-feedback bv-no-label"
                              data-bv-icon-for="comment"
                              style={{
                                display: "none",
                              }}
                            ></i>
                            <small
                              class="help-block"
                              data-bv-validator="stringLength"
                              data-bv-for="comment"
                              data-bv-result="NOT_VALIDATED"
                              style={{
                                display: "none",
                              }}
                            >
                              Please enter at least 10 characters and no more
                              than 200
                            </small>
                            <small
                              class="help-block"
                              data-bv-validator="notEmpty"
                              data-bv-for="comment"
                              data-bv-result="NOT_VALIDATED"
                              style={{
                                display: "none",
                              }}
                            >
                              Please enter a description
                            </small>
                          </div>
                          <div class="form-group mar-top-40">
                            <button type="submit" class="btn v7">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div class="col-md-5 offset-md-1">
                      <div class="contact-content">
                        <div class="contact-icon">
                          <i class="ion-ios-location-outline"></i>
                        </div>
                        <div class="contact-details">
                          <h5>Address</h5>
                          <p>Kathmandu, Nepal.</p>
                        </div>
                      </div>
                      <div class="contact-content">
                        <div class="contact-icon">
                          <i class="ion-ios-email-outline"></i>
                        </div>
                        <div class="contact-details">
                          <h5>Contact Us</h5>
                          <p>
                            {" "}
                            <a href="mailto:info@crocuspearl.com">
                              info@crocuspearl.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="contact-content">
                        <div class="contact-icon">
                          <i class="ion-ios-email-outline"></i>
                        </div>
                        <div class="contact-details">
                          <h5>Enquiries</h5>
                          <p>
                            <a href="mailto:ayush@crocuspearl.com">
                              ayush@crocuspearl.com
                            </a>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28255.9347768554!2d85.301393!3d27.717538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50794d5d7f5bdb6a!2sCrocus%20Pearl%20Technologies%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1676375773398!5m2!1sen!2snp"
                        width="1000"
                        height="450"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div class="content-blocks pop">
              <div id="close-pop" class="close-pop">
                Close <i class="ion-ios-close-empty"></i>
              </div>
              <section class="content"></section>
            </div>
          </div>
        </section>
        <script src="js/plugins.min.js"></script>

        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script src="https://threejs.org/examples/js/libs/stats.min.js"></script>
        <script src="js/main.js"></script>
        <script src="js/particles.js"></script>
      </body>
    </>
  );
};

export default Home;
