import { Container, Jumbotron, Button } from "reactstrap";
import Link from "next/link";

const IndexPage = () => {
  return (
    <Container>
      <Jumbotron className="mt-3 p-4">
        <h1>Todo Application</h1>
        <Button color="primary mr-3 mt-2">
          <Link href="/todos">
            <span className="text-white">Check out your todos</span>
          </Link>
        </Button>

        <Button color="primary mt-2">
          <Link href="/create">
            <span className="text-white">Create a new todo</span>
          </Link>
        </Button>
      </Jumbotron>
    </Container>
  );
};

export default IndexPage;
