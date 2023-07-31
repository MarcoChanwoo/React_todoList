// 말 그대로 테스트(Reducer)용

import { useReducer } from "react";


function reducer(state, action) {
   switch (action.type) {
      case "INCREASE":
         return state + action.data;
      case "DECREASE":
         return state - action.data;
      case "INIT":
         return 0;
      default:
         return state;
   }
}

function TestComp() {
   const [count, dispatch] = useReducer(reducer, 0);
   return (
      <div>
         <h4>테스트 컴포넌트</h4>
         <div>
            <bold>{count}</bold>
         </div>
         <div>
            <button onClick={() => dispatch({ type: "INCREASE", data: 1 })}>+</button>
            <button onClick={() => dispatch({ type: "DECREASE", data: 1 })}>-</button>
            <button onClick={() => dispatch({ type: "INIT" })}>Init to ZERO</button>
         </div>
      </div>
   );
}
export default TestComp;