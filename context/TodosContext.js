import { createContext, useReducer, useRef } from "react";

const TodosContext = createContext({});

const reducer = (state, action) => {
  console.log("ACTION", action);
  switch (action.type) {
    case "ADD":
      return { ...state, [action.id]: action.payload };
    case "EDIT":
      return state;
    case "REMOVE":
      const newState = Object.keys(state).reduce((object, key) => {
        if (key !== action.payload) {
          object[key] = state[key];
        }
        return object;
      }, {});
      return newState;
    default:
      throw new Error("Not an allowed action type");
  }
};

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});
  const totalTodos = useRef(0);

  const value = {
    state,
    dispatch,
    totalTodos,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};

export { TodosContext, TodosProvider };
