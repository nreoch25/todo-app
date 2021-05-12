import { useContext, useState } from "react";
import { Container } from "reactstrap";
import Search from "../../components/Search";
import Todos from "../../components/Todos";
import { TodosContext } from "../../context/TodosContext";

const TodoPage = () => {
  const { state } = useContext(TodosContext);
  const [searchTerm, setSearchTerm] = useState("");

  if (Object.keys(state).length === 0) {
    return (
      <Container className="mt-3">
        <h6>You do not have any todos yet</h6>
      </Container>
    );
  }
  return (
    <Container>
      <Search setSearchTerm={setSearchTerm} />
      <Todos searchTerm={searchTerm} />
    </Container>
  );
};

export default TodoPage;
