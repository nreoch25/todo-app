import { useContext } from "react";
import { parseISO, format } from "date-fns";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { TodosContext } from "../context/TodosContext";

const Todos = () => {
  const { state, dispatch } = useContext(TodosContext);
  const handleRemove = (id) => () => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };

  return (
    <div>
      <h1>Todos List</h1>
      <ListGroup>
        {Object.entries(state).map(([key, value]) => {
          const dueDate = format(parseISO(value.dueDate), "PPP");
          return (
            <ListGroupItem key={key}>
              <div className="float-right">
                <Button className="mr-3">Edit</Button>
                <Button color="danger" onClick={handleRemove(key)}>
                  Delete
                </Button>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <p>{value.status}</p>
              <p className="font-weight-bold">Due: {dueDate}</p>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Todos;
