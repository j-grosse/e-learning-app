import React, { useContext, useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import 'draft-js/dist/Draft.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './styles.css';
import { Button } from '@/components/ui/button';
import { AuthContext } from '@/context/AuthContext';
import { CoursesContext } from '@/context/CoursesContext';

const CourseEditor = () => {
  //   const { user } = useContext(AuthContext);
  const context = useContext(CoursesContext);
  const [loading, setLoading] = useState(false);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleSubmit = async (e) => {
    const content = editorState.getCurrentContent().getPlainText();
    console.log(content);
    e.preventDefault();
    setLoading(true);

    const lesson = {
      courseModuleId: null,
      title: 'title',
      text: content,
      videoUrls: [],
      attachmentUrls: [],
    };

    await context.createLesson(lesson);
    setLoading(false);
    //   <Navigate to="/dashboard" />;
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="editor-container">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="rich-editor demo-wrapper"
        editorClassName="demo-editor"
        placeholder="Add your content..."
      />
      <Button variant="submitFull" className="w-30" onClick={handleSubmit}>
        Save
      </Button>
    </div>
  );
};

export default CourseEditor;
