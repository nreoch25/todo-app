import { useContext } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { TodosContext } from "../context/TodosContext";

const Todos = () => {
  const { state } = useContext(TodosContext);
  console.log("STATE", state);
  return (
    <div>
      <h1>Todos List</h1>
      <ListGroup>
        {Object.entries(state).map(([key, value]) => {
          console.log("key", key);
          console.log("value", value);
          return <ListGroupItem key={key}>{value.title}</ListGroupItem>;
        })}
      </ListGroup>
    </div>
  );
};

export default Todos;
