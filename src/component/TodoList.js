import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({ todo, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const getSearchResult = () => { // TodoList 검색
    return search === "" ? todo : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
  };// toLowerCase(): 대소문자 구분 없도록 설정

  return (
    <div className="TodoList">
      <h4>Todo List 😒</h4>
      <input
        value={search}
        onChange={onChangeSearch}
        className="searchbar"
        placeholder="searching here"
      />
      <div className="list_wrapper">
        {getSearchResult().map((it) => ( // App.js의 mockTodo 리스트들을 불러와 화면에 표기함(map 메서드)
          <TodoItem
            key={it.id}{...it}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;