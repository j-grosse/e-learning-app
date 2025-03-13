import ProfilePicture01 from "./profile-picture01.jpg";
import ProfilePicture02 from "./profile-picture02.jpg";

const TestimonialSection = () => {
  return (
    <>
      <section className="bg-primary-50 ">
        <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-8 lg:px-6" />
        <div className="mx-auto max-w-screen-sm">
          <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-primary-800 dark:text-white">
            Testimonials
          </h2>
        </div>

        {/* testimonials rows */}
        <div className="grid pb-8 lg:pb-12 lg:grid-cols-2 max-w-screen-xl mx-auto">
          {/* quote */}
          <figure className="flex flex-col justify-center items-center p-8 text-center bg-primary-50">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <section className="bg-gradient-to-t from-primary-50 to-primary-100 dark:bg-gray-900 rounded-lg ">
                <div className="rounded-lg max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6 shadow-lg">
                  <figure className="text-left max-w-screen-md mx-auto">
                    {/* quotaion mark svg */}
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* end quotaion mark svg */}

                    <blockquote>
                      <p className="text-lg font-medium text-gray-500 dark:text-white">
                        "I can't express how transformative my experience has
                        been with iCreate. As someone who had always wanted to
                        learn music but never found the right opportunity, this
                        course has been a game changer. The instructors are
                        incredibly knowledgeable and passionate about teaching.
                        Their personalized feedback and encouragement made all
                        the difference. I've not only improved my skills but
                        also gained the confidence to perform in front of
                        others. I highly recommend iCreate courses to anyone
                        looking to embark on their musical journey!"
                      </p>
                    </blockquote>
                    {/* profile picture */}

                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src={ProfilePicture01}
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          Frank Goser
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          Graphic designer
                        </div>
                      </div>
                    </figcaption>
                    {/* end profile picture */}
                  </figure>
                </div>
              </section>
            </blockquote>
          </figure>
          {/* quote */}

          <figure className="flex flex-col justify-center items-center p-8 text-center bg-primary-50">
            <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
              <section className="bg-gradient-to-t from-primary-50 to-primary-100 dark:bg-gray-900 rounded-lg">
                <div className="rounded-lg max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-8 lg:px-6 shadow-lg">
                  <figure className="text-left max-w-screen-md mx-auto">
                    {/* quotaion mark svg */}
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    {/* end quotaion mark svg */}

                    <blockquote>
                      <p className="text-lg font-medium text-gray-500 dark:text-white">
                        "Enrolling in the Mixed Media Course at iCreate has been
                        one of the best decisions I’ve made for my creative
                        journey. The course is incredibly well-designed,
                        blending various techniques and materials that allowed
                        me to explore my artistic expression in ways I never
                        imagined. The instructors are not only talented artists
                        but also exceptional teachers who provide invaluable
                        feedback and encouragement. Their passion for the topic
                        shines through in every lesson, making the learning
                        experience engaging and inspiring."
                      </p>
                    </blockquote>
                    {/* profile picture */}
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src={ProfilePicture02}
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          Lisa Keller
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          Video editor
                        </div>
                      </div>
                    </figcaption>
                    {/* end profile picture */}
                  </figure>
                </div>
              </section>
            </blockquote>
          </figure>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
