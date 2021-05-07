import { createContext, useReducer } from "react";

const TodosContext = createContext({});

const initialState = {
  1: {
    title: "Todo 1",
    description: "This is a first todo",
    status: "pending",
    due: "",
  },
  2: {
    title: "Todo 2",
    description: "This is a second todo",
    status: "pending",
    due: "",
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return state;
    case "EDIT":
      return state;
    case "REMOVE":
      return state;
    default:
      throw new Error("Not an allowed action type");
  }
};

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return <TodosContext.Provider value={value}>{children}</TodosContext.Provider>;
};

export { TodosContext, TodosProvider };
