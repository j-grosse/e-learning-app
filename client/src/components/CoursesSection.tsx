import React, {useState, useEffect } from 'react';
import CoursesPlaceholder from '../assets/images/CoursesPlaceholder.png';
import CourseThumb from '../assets/images/thumb.png';
import CourseCard from './CourseCard';
import axios from 'axios';

// const data = [
//   { 'id': '1',
//     'title': 'Joe'
//   },
//   {
//     'id': '2',
//     'title': 'Mary'
//   }
// ]


const CoursesSection = () => {
  const [Courses, setCourses] = useState(null); // data from backend

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/courses`)
      .then((res) => {
        setCourses(res.data);
        console.log('axios data from db:', '\n\n', res.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
     {/* {Courses && Courses.map((course) => {
      return (
      <div key={course.id}>
      <CourseCard image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.learningandthebrain.com%2Fblog%2Fwp-content%2Fuploads%2F2018%2F09%2FAdobeStock_182043612_Credit.jpg&f=1&nofb=1&ipt=e8c071ee63185f8afb6154a5a750f9e70ad7b626bf43dd03e566df8f346c2c2c&ipo=images" title={course.title} text="Fundamental of UX for Application design The automated process all your website tasks. Discover tools and techniques to engage effectively with vulnerable children and young people." size="sm" />
      </div>
      );
   })}; */}


      {/* <!-- Courses area start --> */}
      <div className="courses-area">
        <div className="container text-primary">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-tittle text-center mb-55">
                <h2>Our featured courses</h2>
              </div>
            </div>
          </div>
          <div className="courses-actives flex">
            {/* <!-- Single --> */}
            <div className="flex flex-row">
              <div className="properties__card">
                <div className="properties__img overlay1">
                  <a href="#">
                    <img src="assets/img/gallery/featured1.png" alt="" />
                  </a>
                </div>
                <div className="properties__caption">
                  <p>User Experience</p>
                  <h3>
                    <a href="#">Fundamental of UX for Application design</a>
                  </h3>
                  <p>
                    The automated process all your website tasks. Discover tools
                    and techniques to engage effectively with vulnerable
                    children and young people.
                  </p>
                  <div className="properties__footer d-flex justify-content-between align-items-center">
                    <div className="restaurant-name">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                      </div>
                      <p>
                        <span>(4.5)</span> based on 120
                      </p>
                    </div>
                    <div className="price">
                      <span>$135</span>
                    </div>
                  </div>
                  <a href="#" className="border-btn border-btn2">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            {/* <!-- Single --> */}
            <div className="properties pb-20">
              <div className="properties__card">
                <div className="properties__img overlay1">
                  <a href="#">
                    <img src="assets/img/gallery/featured2.png" alt="" />
                  </a>
                </div>
                <div className="properties__caption">
                  <p>User Experience</p>
                  <h3>
                    <a href="#">Fundamental of UX for Application design</a>
                  </h3>
                  <p>
                    The automated process all your website tasks. Discover tools
                    and techniques to engage effectively with vulnerable
                    children and young people.
                  </p>
                  <div className="properties__footer d-flex justify-content-between align-items-center">
                    <div className="restaurant-name">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half"></i>
                      </div>
                      <p>
                        <span>(4.5)</span> based on 120
                      </p>
                    </div>
                    <div className="price">
                      <span>$135</span>
                    </div>
                  </div>
                  <a href="#" className="border-btn border-btn2">
                    Find out more
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Single --> */}
            {/* <!-- Single --> */}
            {/* <div className="properties pb-20"> */}
            <div className="properties__card">
              <div className="properties__img overlay1">
                <a href="#">
                  <img src="assets/img/gallery/featured3.png" alt="" />
                </a>
              </div>
              <div className="properties__caption">
                <p>User Experience</p>
                <h3>
                  <a href="#">Fundamental of UX for Application design</a>
                </h3>
                <p>
                  The automated process all your website tasks. Discover tools
                  and techniques to engage effectively with vulnerable children
                  and young people.
                </p>
                <div className="properties__footer d-flex justify-content-between align-items-center">
                  <div className="restaurant-name">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half"></i>
                    </div>
                    <p>
                      <span>(4.5)</span> based on 120
                    </p>
                  </div>
                  <div className="price">
                    <span>$135</span>
                  </div>
                </div>
                <a href="#" className="border-btn border-btn2">
                  Find out more
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single --> */}
          {/* <!-- Single --> */}
          <div className="properties pb-20">
            <div className="properties__card">
              <div className="properties__img overlay1">
                <a href="#">
                  <img src="assets/img/gallery/featured2.png" alt="" />
                </a>
              </div>
              <div className="properties__caption">
                <p>User Experience</p>
                <h3>
                  <a href="#">Fundamental of UX for Application design</a>
                </h3>
                <p>
                  The automated process all your website tasks. Discover tools
                  and techniques to engage effectively with vulnerable children
                  and young people.
                </p>
                <div className="properties__footer d-flex justify-content-between align-items-center">
                  <div className="restaurant-name">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star-half"></i>
                    </div>
                    <p>
                      <span>(4.5)</span> based on 120
                    </p>
                  </div>
                  <div className="price">
                    <span>$135</span>
                  </div>
                </div>
                <a href="#" className="border-btn border-btn2">
                  Find out more
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Single --> */}
          {/* </div> */}
        </div>
      </div>
      {/* <!-- Courses area End --> */}
    </>
  );
};

export default CoursesSection;
