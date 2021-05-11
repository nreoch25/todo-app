import { useContext } from "react";
import { parseISO, format } from "date-fns";
import Link from "next/link";
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
                <Button className="mr-3">
                  <Link href={`/edit/${key}`}>
                    <span className="text-white">Edit</span>
                  </Link>
                </Button>
                <Button color="danger" onClick={handleRemove(key)}>
                  Delete
                </Button>
              </div>
              <h3 className="mb-4">{value.title}</h3>
              <p>
                Description: <span className="font-weight-bold">{value.description}</span>
              </p>
              <p>
                Status: <span className="font-weight-bold">{value.status}</span>
              </p>
              <p>
                Due Date: <span className="font-weight-bold">{dueDate}</span>
              </p>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default Todos;
