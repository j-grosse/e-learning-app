'use client';
import React, { useContext, useEffect, useState } from 'react';
import { CoursesContext } from '../../../context/CoursesContext';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import { Button } from '@/components/ui/button';

const CourseEditor = () => {
  const { courses, createLesson, updateLesson, fetchCourses } =
    useContext(CoursesContext);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(''); // current editor title
  const [content, setContent] = useState(''); // current editor content
  //   const [description, setDescription] = useState('');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  // useEffect(() => {
  //   console.log('courses wasupdated, component refreshed');
  // }, [courses]);

  const handleTitle = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };

  const handleCourseSelect = (course) => {
    setSelectedCourse(course);
    setSelectedModule(null);
    setSelectedLesson(null);
    setTitle('');
    setContent('');
  };

  const handleModuleSelect = (courseModule) => {
    // clear editor if selecting other module
    if (courseModule !== selectedModule) {
      setSelectedModule(courseModule);
      setSelectedLesson(null);
      setTitle('');
      setContent('');
    }
  };

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
    setTitle(lesson.title);
    setContent(lesson.text);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const lesson = {
      courseModuleId: null,
      title: title,
      text: content,
      videoUrls: [],
      attachmentUrls: [],
    };

    try {
      await createLesson(lesson, selectedModule._id);
      await fetchCourses(); // Reload courses after updating a lesson
    } catch (error) {
      console.error('Error creating lesson:', error);
    } finally {
      setLoading(false);
    }
    //   <Navigate to="/dashboard" />;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const lesson = {
      courseModuleId: null,
      title: title,
      text: content,
      videoUrls: [],
      attachmentUrls: [],
    };

    try {
      await updateLesson(lesson, selectedLesson._id);
    } catch (error) {
      console.error('Error creating lesson:', error);
    } finally {
      setLoading(false);
    }
    //   <Navigate to="/dashboard" />;
  };

  const handleDelete = () => {
    console.log('delete lesson');
  };

  if (loading) return <p>Loading...</p>;

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
      {/* list courses */}
      <h2 className="pb-4">Courses</h2>
      <div className="flex gap-4">
        {courses
          ? courses.map((course) => (
              <div key={course._id} onClick={() => handleCourseSelect(course)}>
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
      {/* list course modules and lessons */}
      <div>
        {selectedCourse ? (
          <div
            key={selectedCourse._id}
            className="p-4 mt-8 w-64 border b-2 rounded-md shadow-md"
          >
            <h2 className="">Modules</h2>
            <hr/>
            <ul className="ml-3">
              {selectedCourse.courseModules
                ? selectedCourse.courseModules.map((courseModule) => (
                    <li
                      key={courseModule._id}
                      className="mt-2 cursor-pointer"
                      onClick={() => handleModuleSelect(courseModule)}
                    >
                      <h3>{courseModule.title}</h3>
                      <ol>
                        {/* list module's lessons if module was selected (clicked) */}
                        {courseModule === selectedModule
                          ? selectedModule.lessons.map((lesson) => (
                              <li
                                key={lesson._id}
                                className="ml-3 cursor-pointer hover:text-primary"
                                onClick={() => handleLessonSelect(lesson)}
                              >
                                {lesson.title}
                              </li>
                            ))
                          : ''}
                      </ol>
                    </li>
                  ))
                : ''}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Editor */}
        <div className="w-full max-w-3xl p-5 my-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
            Editor
          </h2>
          <form>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              {/* Title */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="title"
                  className="block text-sm font-medium leading-6 text-gray-900 mb-2 "
                >
                  Title
                </label>
                <div className="mt-2">
                  <input
                    onChange={handleTitle}
                    type="text"
                    value={title}
                    name="title"
                    id="title"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Type the Course title"
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
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div> */}
              {/* Content */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="content"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Content
                </label>
                {/* @ts-ignore */}
                <ReactQuill
                  theme="snow"
                  value={content}
                  onChange={setContent}
                  modules={modules}
                  formats={formats}
                />
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <Button type="submit" variant="submitFull" onClick={handleUpdate}>
                Update
              </Button>
              <Button type="submit" variant="submitFull" onClick={handleCreate}>
                Create new lesson
              </Button>
              <Button
                type="submit"
                variant="destructive"
                onClick={handleDelete}
              >
                Delete lesson
              </Button>
            </div>
          </form>
        </div>

        {/* Preview */}
        <div className="w-full max-w-3xl p-8 my-6 bg-white border border-gray-200 rounded-lg shadow mx-auto">
          <h2 className="text-3xl font-bold border-b border-gray-400 pb-2 mb-5 ">
            Preview
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* Title */}
            <div className="sm:col-span-2">
              <h2 className="block text-sm font-medium leading-6 text-gray-900 mb-2 ">
                Title
              </h2>
              <div className="mt-2">
                <p className="text-2xl font-bold">{title}</p>
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
              <h2 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Content
              </h2>
              {parse(content)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEditor;
