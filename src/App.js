import { useReducer, useRef } from 'react';
import './App.css';
import Header from './component/Header';
import TodoEditor from './component/TodoEditor';
import TodoList from './component/TodoList';
// import TestComp from './component/TestComp';

const mockTodo = [
  {
    id: 0,
    isDone: false,
    content: "Studying React",
    createDate: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Walking around",
    createDate: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Watching movies",
    createDate: new Date().getTime(),
  },
];

function reducer(state, action) {
  // 상태변화 코드
  switch (action.type) {
    case "CREATE": {
      return [action.newItem, ...state];
    }
    case "UPDATE": {
      return state.map((it) =>
        it.id === action.targetId ? { ...it, isDone: !it.isDone } : it
      );
    }
    case "DELETE": {
      return state.filter((it) => it.id !== action.targetId);
    }
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(reducer, mockTodo);
  const idRef = useRef(3);

  const onCreate = (content) => {
    // setTodo 영역 모두 삭제 -> dispatch(useReducer)를 사용할 것이기에
    // const newItem = {
    //   id: idRef.current,
    //   content,
    //   idDone: false,
    //   createDate: new Date().getTime(),
    // };
    // setTodo([newItem, ...todo]);
    // idRef.current += 1;
    dispatch({
      type: "CREATE",
      newItem: {
        id: idRef.current,
        content,
        isDone: false,
        createDate: new Date().getTime(),
      },
    });
    idRef.current += 1;
  };

  const onUpdate = (targetId) => {
    // setTodo(
    //   todo.map(
    //     (it) => {
    //       if (it.id === targetId) {
    //         return {
    //           ...it,
    //           isDone: !it.isDone,
    //         };
    //       } else {
    //         return it;
    //       }
    //     }
    //   )
    // );
    // setTodo( // 바로 위를 삼항연산자 이용으로 줄임
    //   todo.map((it) =>
    //     it.id === targetId ? { ...it, isDone: !it.isDone } : it
    //   )
    // );
    dispatch({
      type:"UPDATE",
      targetId,
    });
  };

  const onDelete = (targetId) => { // 할일 삭제 기능
    // setTodo(todo.filter((it) => it.id !== targetId));
    dispatch({
      type:"DELETE",
      targetId,
    });
  };

  return (
    <div className="App">
      {/* <TestComp /> */}
      <Header />
      <TodoEditor onCreate={onCreate}/>
      <TodoList todo={todo} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );  
}

export default App;
