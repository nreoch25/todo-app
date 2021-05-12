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
  const { dispatch } = useContext(TodosContext);

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
      type: "ADD",
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
    <Row className="mt-4">
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
              <Alert color="danger" className="mb-0">
                {error}
              </Alert>
            </CardFooter>
          )}
          {success && (
            <CardFooter>
              <Alert color="success" className="mb-0">
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
