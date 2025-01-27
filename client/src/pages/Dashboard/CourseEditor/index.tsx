import React, { useContext, useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.css';
import { Button } from '@/components/ui/button';
// import { AuthContext } from '@/context/AuthContext';
import { CoursesContext } from '@/context/CoursesContext';

const CourseEditor = () => {
  //   const { user } = useContext(AuthContext);
  const context = useContext(CoursesContext);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleClear = () => {
    setTitle('');
    setEditorState(EditorState.createEmpty());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const textContent = editorState.getCurrentContent().getPlainText();
    console.log(textContent);
    setLoading(true);

    const lesson = {
      courseModuleId: null,
      title: title,
      text: textContent,
      videoUrls: [],
      attachmentUrls: [],
    };

    try {
      await context.createLesson(lesson);
    } catch (error) {
      console.error('Error creating lesson:', error);
    } finally {
      setLoading(false);
    }
    //   <Navigate to="/dashboard" />;
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="editor-container max-w-xl">
        <div className="shadow-lg mb-4 rounded-md">
          <label htmlFor="title"></label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
            placeholder="Add title"
          />
        </div>
        <div className="flex flex-wrap gap-4 mb-4">
          <Editor
            className="overflow-x-hidden"
            editorState={editorState}
            onEditorStateChange={handleEditorChange}
            wrapperClassName="rich-editor demo-wrapper"
            editorClassName="demo-editor"
            placeholder="Add content"
            toolbarClassName="toolbar-class"
            toolbar={{
              options: [
                'inline',
                'blockType',
                'list',
                'textAlign',
                'link',
                'embedded',
                'emoji',
                'image',
                'history',
              ],
              inline: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['bold', 'italic', 'underline'],
              },
              blockType: {
                inDropdown: false,
                options: ['Normal', 'H1', 'H2', 'H3', 'Blockquote', 'Code'],
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
              },
              list: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['unordered', 'ordered'],
              },
              textAlign: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['left', 'center', 'right', 'justify'],
              },
              link: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                popupClassName: undefined,
                dropdownClassName: undefined,
                showOpenOptionOnHover: true,
                defaultTargetOption: '_self',
                options: ['link', 'unlink'],
                linkCallback: undefined,
              },
              embedded: {
                className: undefined,
                component: undefined,
                popupClassName: undefined,
                embedCallback: undefined,
                defaultSize: {
                  height: 'auto',
                  width: 'auto',
                },
              },
              emoji: {
                className: undefined,
                component: undefined,
                popupClassName: undefined,
                emojis: ['😃', '😉', '😎', '🤔', '😫', '😌', '🤓', '✅', '❎'],
              },
              image: {
                className: undefined,
                component: undefined,
                popupClassName: undefined,
                urlEnabled: true,
                uploadEnabled: true,
                alignmentEnabled: true,
                uploadCallback: undefined,
                previewImage: false,
                inputAccept:
                  'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                alt: { present: false, mandatory: false },
                defaultSize: {
                  height: 'auto',
                  width: 'auto',
                },
              },
              history: {
                inDropdown: false,
                className: undefined,
                component: undefined,
                dropdownClassName: undefined,
                options: ['undo', 'redo'],
              },
            }}
          />

          <div className="overflow-x-hidden p-4 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm shadow-lg">
            {/* <label htmlFor="preview"></label> */}

            <h1>{title ? title : 'Title'} </h1>
            {editorState.getCurrentContent().getPlainText()
              ? editorState.getCurrentContent().getPlainText()
              : 'Content'}
          </div>
        </div>

        <div className="flex gap-4">
          <Button
            type="submit"
            variant="submitFull"
            className="w-30"
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button variant="submitFull" className="w-30" onClick={handleClear}>
            Clear
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseEditor;
