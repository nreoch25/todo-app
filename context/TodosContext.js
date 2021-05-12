import { createContext, useReducer } from "react";

const TodosContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = Math.floor(Math.random() * 100000000 + 1);
      return { ...state, [id]: action.payload };
    case "EDIT":
      return { ...state, [action.id]: action.payload };
    case "REMOVE":
      const removeState = Object.keys(state).reduce((object, key) => {
        if (key !== action.payload) {
          object[key] = state[key];
        }
        return object;
      }, {});
      return removeState;

    default:
      throw new Error();
  }
};

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  const value = {
    state,
    dispatch,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};

export { TodosContext, TodosProvider };
