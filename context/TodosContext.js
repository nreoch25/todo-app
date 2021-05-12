import { createContext, useReducer, useEffect } from "react";

const TodosContext = createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "INITIALIZE":
      return { ...state, ...action.payload };
    case "ADD":
      const id = Math.floor(Math.random() * 100000000 + 1);
      const addState = { ...state, [id]: action.payload };
      localStorage.setItem("todos", JSON.stringify(addState));
      return addState;
    case "EDIT":
      const editState = { ...state, [action.id]: action.payload };
      localStorage.setItem("todos", JSON.stringify(editState));
      return editState;
    case "REMOVE":
      const removeState = Object.keys(state).reduce((object, key) => {
        if (key !== action.payload) {
          object[key] = state[key];
        }
        return object;
      }, {});
      localStorage.setItem("todos", JSON.stringify(removeState));
      return removeState;

    default:
      throw new Error();
  }
};

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      dispatch({ type: "INITIALIZE", payload: todos });
    }
  }, []);

  const value = {
    state,
    dispatch,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};

export { TodosContext, TodosProvider };
