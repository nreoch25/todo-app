import { useState, useContext } from "react";
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "reactstrap";
import DatePicker from "reactstrap-date-picker";
import { TodosContext } from "../context/TodosContext";

const Create = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "pending",
    dueDate: new Date().toISOString(),
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { dispatch, totalTodos } = useContext(TodosContext);

  console.log("TOTAL", totalTodos);

  const saveToState = ({ target: { name, value } }) => {
    setTodo({ ...todo, [name]: value });
  };

  const handleChange = (value, formattedValue) => {
    console.log("FORMATTED VALUE", formattedValue);
    setTodo({ ...todo, dueDate: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { title, description } = todo;
    if (!title || !description) {
      return setError("Please fill in form fields");
    }

    totalTodos.current = totalTodos.current + 1;

    dispatch({
      type: "ADD",
      id: totalTodos.current,
      payload: todo,
    });
    setSuccess("Todo successfully created");
    setTodo({
      title: "",
      description: "",
      status: "pending",
      dueDate: new Date().toISOString(),
    });
  };

  return (
    <Row style={{ paddingTop: "100px" }}>
      <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
        <Card>
          <CardHeader className="text-center">Create Todo</CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="title"
                  value={todo.title}
                  placeholder="Title"
                  onChange={saveToState}
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type="text"
                  name="description"
                  value={todo.description}
                  placeholder="Description"
                  onChange={saveToState}
                />
              </FormGroup>
              <FormGroup>
                <Label>Due date</Label>
                <DatePicker
                  dateFormat="MM/DD/YYYY"
                  id="todo-datepicker"
                  value={todo.dueDate}
                  onChange={(value, formatted) => handleChange(value, formatted)}
                />
              </FormGroup>
              <Button type="submit" color="primary" block>
                Create
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

export default Create;
