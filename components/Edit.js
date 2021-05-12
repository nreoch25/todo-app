import { useContext, useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Alert,
} from "reactstrap";
import DatePicker from "reactstrap-date-picker";
import { TodosContext } from "../context/TodosContext";

const Edit = ({ id }) => {
  const { state, dispatch } = useContext(TodosContext);
  const item = state[id];
  if (!item) {
    return <h6 className="mt-3">todo with id {id} does not exist</h6>;
  }
  const [todo, setTodo] = useState({
    title: item.title,
    description: item.description,
    status: item.status,
    dueDate: item.dueDate,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const saveToState = ({ target: { name, value } }) => {
    setTodo({ ...todo, [name]: value });
  };

  const handleChange = (value, _) => {
    setTodo({ ...todo, dueDate: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { title, description } = todo;
    if (!title || !description) {
      return setError("Please fill in form fields");
    }

    dispatch({
      type: "EDIT",
      id,
      payload: todo,
    });

    setSuccess("Todo successfully edited");
  };

  return (
    <Row style={{ paddingTop: "100px" }}>
      <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
        <Card>
          <CardHeader className="text-center">Edit Todo</CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={todo.title}
                  placeholder="Title"
                  onChange={saveToState}
                />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={todo.description}
                  placeholder="Description"
                  onChange={saveToState}
                />
              </FormGroup>
              <FormGroup>
                <Label>Status</Label>
                <Input
                  type="select"
                  name="status"
                  value={todo.status}
                  onChange={saveToState}
                  required
                >
                  {["pending", "done"].map((status) => {
                    return <option key={status}>{status}</option>;
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Due date</Label>
                <DatePicker
                  dateFormat="MM/DD/YYYY"
                  id="todo-datepicker2"
                  value={todo.dueDate}
                  onChange={(value, formatted) => handleChange(value, formatted)}
                />
              </FormGroup>
              <Button type="submit" color="primary" block>
                Edit
              </Button>
            </Form>
          </CardBody>
          {error && (
            <CardFooter>
              <Alert style={{ marginBottom: "0" }} color="danger">
                {error}
              </Alert>
            </CardFooter>
          )}
          {success && (
            <CardFooter>
              <Alert style={{ marginBottom: "0" }} color="success">
                {success}
              </Alert>
            </CardFooter>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default Edit;
