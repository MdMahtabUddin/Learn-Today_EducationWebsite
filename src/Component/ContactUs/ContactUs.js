import React from 'react';
import { Container } from "react-bootstrap";
import "./ContactUs.css";
const ContactUs = () => {
    return (
        <div className="contact-us">
      <div className="bg-primary contact4 overflow-hiddedn position-relative">
        <Container>
          <div className="row no-gutters">
            <div className="col-lg-6 contact-box mb-3 mb-md-0">
              <h3 className="text-white mt-2 ">
                Contact Us
              </h3>
              <form className="mt-3">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        type="text"
                        className="form-control text-white"
                        placeholder="name"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <input
                        className="form-control text-white"
                        type="email"
                        placeholder="email address"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group mt-2">
                      <textarea
                        className="form-control text-white"
                        rows="3"
                        placeholder="message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-12 d-flex align-items-center mt-2">
                    <button
                      type="submit"
                      className="btn bg-white text-inverse px-3 py-2"
                    >
                      <span> Submit</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* </div> */}
          </div>
        </Container>
      </div>
    </div>
    );
};

export default ContactUs;




