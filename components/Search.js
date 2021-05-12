import { useState } from "react";
import { Button, Form, FormGroup, Input, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

const Search = ({ setSearchTerm }) => {
  const [search, setSearch] = useState("");

  const handleChange = ({ target: { value } }) => {
    setSearch(value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setSearchTerm(search);
  };

  const handleReset = () => {
    setSearch("");
    setSearchTerm("");
  };

  return (
    <Row className="mt-3">
      <Col sm="12" md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
        <Card>
          <CardHeader className="text-center">Search Todos</CardHeader>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="search"
                  value={search}
                  placeholder="Search title and description of todos"
                  onChange={handleChange}
                />
              </FormGroup>
              <Button type="submit" color="primary" block>
                Search
              </Button>
              <Button type="submit" color="primary" block onClick={handleReset}>
                Reset
              </Button>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Search;
