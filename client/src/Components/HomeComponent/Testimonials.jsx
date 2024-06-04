import React, { useEffect } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import useSplide from "../../hooks/useSplide"; // Assuming you have created this custom hook
// import "aos/dist/aos.css";
import AOS from "aos";

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  // Use the custom Splide hook
  useSplide(".testimonial-slider", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    pauseOnHover: true,
    resetProgress: false,
    arrows: false,
    pagination: true,
  });

  return (
    <div className="section sec-testimonials">
      <div className="container">
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
              Our Testimonials
            </h2>
          </div>
        </div>

        <div className="testimonial-slider-wrap">
          <div className="splide testimonial-slider">
            <div className="splide__track">
              <ul className="splide__list">
                <li className="splide__slide">
                  <div className="item d-flex">
                    <div className="testimonial" data-aos="fade-up">
                      <img
                        src="public/images/img_2.jpg" // Reference the image directly from the public/images directory
                        alt="Testimonial Image"
                        className="img-fluid rounded-circle w-25 mb-4"
                      />
                      <h3 className="h5 text-primary mb-4">Ami Sharma</h3>
                      <p>
                        Thanks to YourCompany, we are now proud homeowners.
                        Great team!
                      </p>
                      <p className="text-black-50">Director, PQR Ltd.</p>
                      <div className="rate">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="icon-star text-warning"
                          ></span>
                        ))}
                      </div>
                    </div>

                    <div className="testimonial" data-aos="fade-up">
                      <img
                        src="public/images/img_2.jpg" // Reference the image directly from the public/images directory
                        alt="Testimonial Image"
                        className="img-fluid rounded-circle w-25 mb-4"
                      />
                      <h3 className="h5 text-primary mb-4">Ami Sharma</h3>
                      <p>
                        Thanks to YourCompany, we are now proud homeowners.
                        Great team!
                      </p>
                      <p className="text-black-50">Director, PQR Ltd.</p>
                      <div className="rate">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="icon-star text-warning"
                          ></span>
                        ))}
                      </div>
                    </div>

                    <div className="testimonial" data-aos="fade-up">
                      <img
                        src="public/images/img_2.jpg" // Reference the image directly from the public/images directory
                        alt="Testimonial Image"
                        className="img-fluid rounded-circle w-25 mb-4"
                      />
                      <h3 className="h5 text-primary mb-4">Ami Sharma</h3>
                      <p>
                        Thanks to YourCompany, we are now proud homeowners.
                        Great team!
                      </p>
                      <p className="text-black-50">Director, PQR Ltd.</p>
                      <div className="rate">
                        {[...Array(5)].map((_, i) => (
                          <span
                            key={i}
                            className="icon-star text-warning"
                          ></span>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
                {/* Add more slides as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
