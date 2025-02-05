'use client';
import { useContext, useEffect, useState } from 'react';
import { CoursesContext } from '../../../context/CoursesContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import { Button } from '@/components/ui/button';

const CourseEditor = () => {
  const {
    courses,
    createLesson,
    createModule,
    updateLesson,
    updateModule,
    deleteModule,
    deleteLesson,
  } = useContext(CoursesContext);
  const [loading, setLoading] = useState(false);

  const [moduleTitle, setModuleTitle] = useState(''); // current module title
  const [lessonTitle, setLessonTitle] = useState(''); // current lesson title
  const [lessonContent, setLessonContent] = useState(''); // current lessonContent
  //   const [description, setDescription] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  // useEffect(() => {}, []);

  const handleModuleTitle = (e) => {
    const newModuleTitle = e.target.value;
    setModuleTitle(newModuleTitle);
  };

  const handleLessonTitle = (e) => {
    const newTitle = e.target.value;
    setLessonTitle(newTitle);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setSelectedModule(null);
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

  // DELETE MODULE
  const handleDeleteModule = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await deleteModule(selectedModule._id, selectedCourse._id);
    } catch (error) {
      console.error("Error deleting module and/or it's lessons:", error);
    } finally {
      setLoading(false);
    }
  };

  // DELETE LESSON
  const handleDeleteLesson = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await deleteLesson(selectedLesson._id, selectedModule._id);
    } catch (error) {
      console.error('Error deleting lesson:', error);
    } finally {
      setLoading(false);
    }
  };

  // if (loading) return <p>Loading...</p>;

  //Custom Tool Bar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'color', 'image'],
      [{ 'code-block': true }],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'link',
    'indent',
    'image',
    'code-block',
    'color',
  ];

  return (
    <div>
      {/* Courses */}
      <h2 className="pb-4">My Courses</h2>
      <div className="flex flex-wrap gap-4">
        {courses
          ? courses.map((course) => (
              <div
                key={course._id}
                className={
                  course === selectedCourse
                    ? 'p-1 w-24 text-sm border b-2 rounded-md shadow-md mt-2 cursor-pointer text-white bg-primary'
                    : 'p-1 w-24 text-sm border b-2 rounded-md shadow-md mt-2 cursor-pointer text-foreground hover:text-gray-500'
                }
                onClick={() => handleCourseSelect(course)}
              >
                <img
                  className="h-20 object-cover"
                  src={course.image}
                  width="100"
                  alt="courseImage"
                />
                <p>{course.title}</p>
              </div>
            ))
          : ''}
      </div>

      {/* Modules and Lessons */}
      <div>
        {courses && selectedCourse ? (
          <div className="p-4 mt-8 w-64 border b-2 rounded-md shadow-md">
            <h2>Modules</h2>
            <hr />

            {/* Modules */}
            <ol key={selectedCourse._id} className="ml-3 list-decimal">
              {selectedCourse.courseModules
                ? selectedCourse.courseModules.map((courseModule) => (
                    <li
                      key={courseModule._id}
                      onClick={() => handleModuleSelect(courseModule)}
                      className={
                        courseModule === selectedModule
                          ? 'mt-2 cursor-pointer text-primary'
                          : 'mt-2 cursor-pointer text-foreground hover:text-gray-500'
                      }
                    >
                      <h3>{courseModule.title}</h3>

                      {/* Lessons */}
                      {courseModule === selectedModule ? (
                        <ol
                          key={courseModule._id + '-lessons'}
                          className="list-decimal"
                        >
                          {selectedModule.lessons.map((lesson) => (
                            <li
                              key={lesson._id}
                              onClick={() => handleLessonSelect(lesson)}
                              className={
                                lesson === selectedLesson
                                  ? 'ml-3 cursor-pointer text-primary'
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
      {/* Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="w-full max-w-3xl p-5 my-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
            Editor
          </h2>
          <form>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Module */}

              <div className="sm:col-span-2">
                <label
                  htmlFor="moduleTitle"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                >
                  Module title
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleModuleTitle}
                    type="text"
                    value={moduleTitle}
                    name="moduleTitle"
                    id="moduleTitle"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Module title"
                  />
                </div>
              </div>

              {/* Buttons Modules */}
              <div className="flex gap-4 mt-6">
                <Button
                  type="submit"
                  variant="submitFull"
                  onClick={handleUpdateModuleTitle}
                >
                  Update Module
                </Button>

                <Button
                  type="submit"
                  variant="submitFull"
                  onClick={handleCreateModule}
                >
                  Create Module
                </Button>

                <Button
                  type="submit"
                  variant="destructive"
                  onClick={handleDeleteModule}
                >
                  Delete Module
                </Button>
              </div>

              {/* Lesson Title */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="lessonTitle"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                >
                  Lesson title
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleLessonTitle}
                    type="text"
                    value={lessonTitle}
                    name="lessonTitle"
                    id="lessonTitle"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Lesson title"
                  />
                </div>
              </div>

              {/* Description */}
              {/* <div className="sm:col-span-2">
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
              <div className="sm:col-span-2">
                <label
                  htmlFor="lessonContent"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Lesson lessonContent
                </label>
                {/* @ts-ignore */}
                <ReactQuill
                  theme="snow"
                  value={lessonContent}
                  onChange={setLessonContent}
                  modules={modules}
                  formats={formats}
                />
              </div>
            </div>

            {/* Buttons Lessons */}
            <div className="flex gap-4 mt-6">
              <Button
                type="submit"
                variant="submitFull"
                onClick={handleUpdateLesson}
              >
                Update Lesson
              </Button>

              <Button
                type="submit"
                variant="submitFull"
                onClick={handleCreateLesson}
              >
                Create Lesson
              </Button>

              <Button
                type="submit"
                variant="destructive"
                onClick={handleDeleteLesson}
              >
                Delete Lesson
              </Button>
            </div>
          </form>
        </div>

        {/* {loading ? 'saving' : ''} */}

        {/* Preview */}
        <div className="w-full max-w-3xl p-5 my-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
            Preview
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Lesson title */}
            <div className="sm:col-span-2">
              {/* <h2 className="block text-sm font-medium leading-6 text-gray-900 mb-2 ">
                Lesson title
              </h2> */}
              <div>
                <p className="text-2xl font-bold">{lessonTitle}</p>
              </div>
            </div>

            {/* Description */}
            {/* <div className="sm:col-span-2">
              <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </h2>
              <p>{description}</p>
            </div> */}
            <div className="sm:col-span-full">
              {/* <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Lesson content
              </h2> */}
              {parse(lessonContent)}
            </div>
          </div>
        </div>
        {/* End Preview */}
      </div>
    </div>
  );
};

export default CourseEditor;
