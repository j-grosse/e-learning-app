'use client';
import { useContext, useState } from 'react';
import { CoursesContext } from '../../../context/CoursesContext';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import CourseCardMiniList from '@/components/common/CourseCardMiniList';

const CourseEditor = () => {
  const {
    courses,
    createCourse,
    // deleteCourse,
    createLesson,
    createModule,
    updateLesson,
    updateModule,
    // deleteModule,
    // deleteLesson,
  } = useContext(CoursesContext);
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [courseTitle, setCourseTitle] = useState('');
  const [moduleTitle, setModuleTitle] = useState('');
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonContent, setLessonContent] = useState('');
  //   const [description, setDescription] = useState('');

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleCourseTitle = (e) => {
    const newCourseTitle = e.target.value;
    setCourseTitle(newCourseTitle);
  };

  const handleModuleTitle = (e) => {
    const newModuleTitle = e.target.value;
    setModuleTitle(newModuleTitle);
  };

  const handleLessonTitle = (e) => {
    const newTitle = e.target.value;
    setLessonTitle(newTitle);
  };

  const showDeleteToast = () => {
    toast({
      title: 'Deleting is disabled',
      description: 'Deleting is disabled in demo mode',
    });
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setCourseTitle(course.title);
    setSelectedModule(null);
    setModuleTitle('');
    setSelectedLesson(null);
    setLessonTitle('');
    setLessonContent('');
  };

  const handleModuleSelect = (courseModule) => {
    // clear editor only if selecting a different module
    if (courseModule !== selectedModule) {
      setSelectedModule(courseModule);
      setModuleTitle(courseModule.title);
      setSelectedLesson(null);
      setLessonTitle('');
      setLessonContent('');
    }
  };

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setLessonTitle(lesson.title);
    setLessonContent(lesson.text);
  };

  // CRUD OPERATIONS //

  // CREATE COURSE
  const handleCreateCourse = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newCourse = {
      id: '99',
      title: courseTitle,
      description: 'a',
      tutor: 'Jay',
      image:
        'https://jaydatamusic.com/wp-content/uploads/2016/03/jay-data-674fm-copy.jpg',
      year: 2025,
      category: '',
      duration: '5:30',
      price: '11.99',
      rating: 5,
      courseModules: [],
    };
    try {
      await createCourse(newCourse);
    } catch (error) {
      console.error('Error creating course:', error);
    } finally {
      setLoading(false);
    }
  };

  // CREATE MODULE
  const handleCreateModule = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newModule = {
      courseId: selectedCourse._id,
      title: moduleTitle,
      lessons: [],
    };
    try {
      await createModule(newModule, selectedCourse._id);
    } catch (error) {
      console.error('Error creating module:', error);
    } finally {
      setLoading(false);
    }
  };

  // CREATE LESSON
  const handleCreateLesson = async (e) => {
    e.preventDefault();
    setLoading(true);
    const newLesson = {
      courseModuleId: selectedModule._id,
      title: lessonTitle,
      text: lessonContent,
      videoUrls: [],
      attachmentUrls: [],
    };
    try {
      await createLesson(newLesson, selectedModule._id);
    } catch (error) {
      console.error('Error creating lesson:', error);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE COURSE
  // const handleUpdateCourseTitle = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);
  //   const course = { ...selectedCourse, title: courseTitle };

  //   try {
  //     await updateCourse(course, selectedCourse._id);
  //   } catch (error) {
  //     console.error('Error updating course:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // UPDATE MODULE
  const handleUpdateModuleTitle = async (e) => {
    e.preventDefault();
    setLoading(true);
    const courseModule = { ...selectedModule, title: moduleTitle };

    try {
      await updateModule(courseModule, selectedModule._id);
    } catch (error) {
      console.error('Error updating module:', error);
    } finally {
      setLoading(false);
    }
  };

  // UPDATE LESSON
  const handleUpdateLesson = async (e) => {
    e.preventDefault();
    setLoading(true);
    const lesson = {
      courseModuleId: null,
      title: lessonTitle,
      text: lessonContent,
      videoUrls: [],
      attachmentUrls: [],
    };
    try {
      await updateLesson(lesson, selectedLesson._id);
    } catch (error) {
      console.error('Error updating lesson:', error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE COURSE
  const handleDeleteCourse = async (e) => {
    e.preventDefault();
    // setLoading(true);
    showDeleteToast();
    // try {
    //   await deleteCourse(selectedCourse._id);
    // } catch (error) {
    //   console.error("Error deleting course:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  // DELETE MODULE
  const handleDeleteModule = async (e) => {
    e.preventDefault();
    showDeleteToast();
    // setLoading(true);
    // try {
    //   await deleteModule(selectedModule._id, selectedCourse._id);
    // } catch (error) {
    //   console.error("Error deleting module and/or it's lessons:", error);
    // } finally {
    //   setLoading(false);
    // }
  };

  // DELETE LESSON
  const handleDeleteLesson = async (e) => {
    e.preventDefault();
    showDeleteToast();
    // setLoading(true);
    // try {
    //   await deleteLesson(selectedLesson._id, selectedModule._id);
    // } catch (error) {
    //   console.error('Error deleting lesson:', error);
    // } finally {
    //   setLoading(false);
    // }
  };

  // if (loading) return <p>Loading...</p>;

  //Custom Tool Bar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'blockquote'],
      [{ list: 'ordered' }],
      ['link', 'image', 'video'],
      [
        { align: '' },
        { align: 'center' },
        { align: 'right' },
        { align: 'justify' },
      ],
      [{ 'code-block': true }],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'blockquote',
    'list',
    'link',
    'image',
    'video',
    'align',
    'code-block',
  ];

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-3 mb-3">
      <h2 className="mb-6">Editor</h2>
      <div className="flex flex-wrap gap-4">
        <CourseCardMiniList
          courses={courses}
          handleCourseSelect={handleCourseSelect}
          selectedCourse={selectedCourse}
        />
        {/* Modules */}
        <div>
          {selectedCourse ? (
            <div className="p-4 mb-6 w-full w-full bg-background border rounded-lg shadow-md">
              <h2 className="pb-3">Course content</h2>
              <ol
                key={selectedCourse._id}
                className="ml-8 mb-3 text-xl list-decimal"
              >
                {selectedCourse.courseModules
                  ? selectedCourse.courseModules.map((courseModule) => (
                      <li
                        key={courseModule._id}
                        onClick={() => handleModuleSelect(courseModule)}
                        className={`mt-2 cursor-pointer hover:text-gray-500 ${
                          courseModule === selectedModule
                            ? 'font-extrabold'
                            : 'text-foreground'
                        }`}
                      >
                        <h3>{courseModule.title}</h3>

                        {/* Lessons */}
                        {courseModule === selectedModule ? (
                          <ol
                            key={courseModule._id + '-lessons'}
                            className="ml-4 text-lg list-decimal"
                          >
                            {selectedModule.lessons.map((lesson) => (
                              <li
                                key={lesson._id}
                                onClick={() => handleLessonSelect(lesson)}
                                className={
                                  lesson === selectedLesson
                                    ? 'ml-3 cursor-pointer text-primary animate-pulse'
                                    : 'ml-3 cursor-pointer text-foreground hover:text-gray-500'
                                }
                              >
                                {lesson.title}
                              </li>
                            ))}
                          </ol>
                        ) : (
                          ''
                        )}
                      </li>
                    ))
                  : ''}
              </ol>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>

      {/* Editor */}
      <div className="flex flex-wrap gap-4">
        <div className="w-full w-full">
          {/* <h2 className="pb-3">Editor</h2> */}
          <div>
            <div>
              {/* Course */}

              <div className="p-3 mb-6 border rounded-lg">
                <div className="">
                  <label
                    htmlFor="courseTitle"
                    className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                  >
                    <h3>Course title</h3>
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleCourseTitle}
                      type="text"
                      value={courseTitle}
                      name="courseTitle"
                      id="courseTitle"
                      autoComplete="given-name"
                      className="block w-full rounded-lg border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      placeholder="Course title"
                    />
                  </div>
                </div>

                {/* Buttons Courses */}
                <div className="flex flex-wrap gap-4 my-6">
                  {selectedCourse ? (
                    <Button
                      type="submit"
                      variant="submitFull"
                      // onClick={handleUpdateCourseTitle}
                    >
                      Update Course
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="submitFull"
                      onClick={handleCreateCourse}
                    >
                      Create Course
                    </Button>
                  )}
                  <Button
                    type="submit"
                    variant="destructive"
                    onClick={handleDeleteCourse}
                  >
                    Delete Course
                  </Button>
                </div>
              </div>

              {/* Module */}

              {selectedModule && (
                <div className="p-3 border rounded-lg mb-6">
                <div>
                  <label
                    htmlFor="moduleTitle"
                    className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                  >
                    <h3>Module title</h3>
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleModuleTitle}
                      type="text"
                      value={moduleTitle}
                      name="moduleTitle"
                      id="moduleTitle"
                      autoComplete="given-name"
                      className="block w-full rounded-lg border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      placeholder="Module title"
                    />
                  </div>
                </div>

                {/* Buttons Modules */}

                <div className="flex flex-wrap gap-4 my-6">
                  {selectedModule ? (
                    <Button
                      type="submit"
                      variant="submitFull"
                      onClick={handleUpdateModuleTitle}
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="submitFull"
                      onClick={handleCreateModule}
                    >
                      Create Module
                    </Button>
                  )}
                  <Button
                    type="submit"
                    variant="destructive"
                    onClick={handleDeleteModule}
                  >
                    Delete module
                  </Button>
                </div>
              </div>
              )}

              {/* Lesson Title */}

              {selectedLesson &&
              (<div className="p-3 border rounded-lg">
                <div>
                  <label
                    htmlFor="lessonTitle"
                    className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                  >
                    <h3>Lesson title</h3>
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={handleLessonTitle}
                      type="text"
                      value={lessonTitle}
                      name="lessonTitle"
                      id="lessonTitle"
                      autoComplete="given-name"
                      className="block w-full rounded-lg border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                      placeholder="title"
                    />
                  </div>
                </div>

                {/* Description */}

                {/* <div>
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-purple-500 focus:border-purple-500 "
                  placeholder="Description"
                ></textarea>
                </div> */}

                {/* Lesson content */}

                <div className="mt-4 bg-background">
                  <label
                    htmlFor="lessonContent"
                    className="block pb-2 text-sm font-medium text-gray-900 bg-secondary dark:text-white"
                  >
                    Lesson content
                  </label>
                  <ReactQuill
                    theme="snow"
                    value={lessonContent}
                    onChange={setLessonContent}
                    modules={modules}
                    formats={formats}
                  />
                </div>

                {/* Buttons Lessons */}

                <div className="flex flex-wrap gap-4 my-6">
                  {selectedLesson ? (
                    <Button
                      type="submit"
                      variant="submitFull"
                      onClick={handleUpdateLesson}
                    >
                      Update
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      variant="submitFull"
                      onClick={handleCreateLesson}
                    >
                      Create Lesson
                    </Button>
                  )}
                  <Button
                    type="submit"
                    variant="destructive"
                    onClick={handleDeleteLesson}
                  >
                    Delete lesson
                  </Button>
                </div>
              </div>
              )}
            </div>
          </div>
        </div>

        {/* {loading ? 'saving' : ''} */}

        {/* Preview */}

        {/* <div className="w-full w-full bg-background p-6 border border-gray-200 rounded-lg shadow-md">
          <h2 className="pb-3">Preview</h2>
          <div className="border rounded-lg p-4">
            <div>
              <p className="text-2xl font-bold mb-3">{lessonTitle}</p>
            </div>
            <div>{parse(lessonContent)}</div>
          </div>
        </div> */}
        {/* End Preview */}
      </div>
    </div>
  );
};

export default CourseEditor;
