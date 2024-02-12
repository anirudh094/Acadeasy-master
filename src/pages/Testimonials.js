import React from "react";
import "../css/testimonials.css";
import "../css/flickity.css";

export function AddLibrary(urlOfTheLibrary) {
  const script = document.createElement("script");
  script.src = urlOfTheLibrary;
  script.async = true;
  document.body.appendChild(script);
}
function Testimonials() {
  return (
    <>
      <div className="testimonials-body">
        <div className="heading main-color">Our Students Testimonials</div>
        <div
          className="carousel"
          data-flickity='{"groupCells": 1,"autoPlay": 900,"pauseAutoPlayOnHover": false, "wrapAround": true,"prevNextButtons": false }'
        >
          <div className="carousel-cell">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4042/4042356.png"
              alt="Testimonials"
            ></img>
            <div className="carousel-cell-body">
              <p className="testimonial-comment">
                Acadezy's Web Development course was an absolute game-changer!
                The comprehensive curriculum and hands-on projects allowed me to
                master HTML, CSS, and JavaScript effortlessly. The instructors
                were top-notch, providing clear explanations and timely
                assistance. Highly recommend this course for anyone aspiring to
                become a proficient web developer.
              </p>
              <div className="testimonial-comment-name">
              Aryan Patel - Mumbai University, Mumbai
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4042/4042522.png"
              alt="Testimonials"
            ></img>
            <div className="carousel-cell-body">
              <p className="testimonial-comment">
                Kudos to Acadezy for their exceptional Java course! The content
                was well-structured, covering fundamental concepts to advanced
                topics seamlessly. The hands-on coding exercises and real-world
                applications enhanced my Java programming skills significantly.
                The instructor's expertise and engaging teaching style made the
                learning experience truly enjoyable.
              </p>
              <div className="testimonial-comment-name">
              Priya Sharma - Delhi Technical Institute, Delhi
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <img src="https://cdn-icons-png.flaticon.com/512/4042/4042536.png" alt="Testimonials"></img>
            <div className="carousel-cell-body">
              <p className="testimonial-comment">
                I can't recommend Acadezy's Flutter course enough! The
                step-by-step tutorials and practical projects allowed me to
                grasp Flutter's intricacies quickly. The instructors provided
                valuable insights, making complex concepts feel approachable. If
                you want to dive into mobile app development with Flutter, this
                course is the perfect choice.
              </p>
              <div className="testimonial-comment-name">
              Nisha Verma - Pune IT University, Pune
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4202/4202841.png"
              alt="Testimonials"
            ></img>
            <div className="carousel-cell-body">
              <p className="testimonial-comment">
                Thumbs up to Acadezy's Artificial Intelligence course! The
                content is cutting-edge, covering a wide range of AI topics. The
                hands-on projects and real-world applications allowed me to
                apply theoretical knowledge effectively. The instructor's
                expertise and the interactive nature of the course make it a
                standout choice for those interested in AI.
              </p>
              <div className="testimonial-comment-name">
              Sanya Mishra - Jaipur Technology Institute, Jaipur
              </div>
            </div>
          </div>
          <div className="carousel-cell">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4042/4042376.png"
              alt="Testimonials"
            ></img>
            <div className="carousel-cell-body">
              <p className="testimonial-comment">
                Acadezy's Python course is fantastic! The curriculum covers
                everything from basics to advanced Python concepts. The hands-on
                coding exercises and real-world applications provided a
                well-rounded learning experience. The instructor's clear
                explanations and the course's practical approach make it ideal
                for anyone looking to master Python.
              </p>
              <div className="testimonial-comment-name">
              Rakesh Kumar - Chandigarh Technical University, Chandigarh    
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>

      {AddLibrary("https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js")}
    </>
  );
}

export default Testimonials;
