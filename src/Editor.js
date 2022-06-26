import React, { useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

const Writer = () => {
  const editorRef = useRef();
  const handleClick = () => {
    // class 동적으로 추가하기
    console.log(
      editorRef.current.getRootElement().classList.add("hello-editor")
    );
  };
  return (
    <>
      <Editor
        initialValue='econovation 화이팅!'
        previewStyle='vertical'
        height='100vh'
        initialEditType='markdown'
        useCommandShortcut={false}
        ref={editorRef}
      />
      <button onClick={handleClick}>make bold</button>
    </>
  );
};

/*
https://nhn.github.io/tui.editor/latest/ToastUIEditorCore 참고
initialValue = 초기 문구를 설정합니다.
previewStyle ?
height = 에디터의 높이를 설정합니다.
initialEditType = 초기 에디터의 타입을 설정합니다.
useCommandShortcut 
*/

export default Writer;
