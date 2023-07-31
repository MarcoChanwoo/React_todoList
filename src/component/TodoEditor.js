import { useRef, useState } from "react";
import "./TodoEditor.css";

const TodoEditor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const inputRef = useRef(); // 빈칸 입력 방지

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };
  const onSubmit = () => {
    if (!content) { // 빈칸 입력 방지
      inputRef.current.focus();
      return;
    }
    onCreate(content);
    setContent("");//입력 후 다시 빈칸으로 만듦
  };
  const onKeyDown = (e) => { // enter를 눌러도 저장되도록 설정
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  return (
    <div className="TodoEditor">
      <h4>New to do ✏️</h4>
      <div className="editor_wrapper">
        <input
          ref={inputRef}
          value={content}
          onChange={onChangeContent}
          onKeyDown={onKeyDown}
          placeholder="type new todo..."
        />
        <button onClick={onSubmit}>Add</button>
      </div>
    </div>
  );
};

export default TodoEditor;