import { useRouter } from "next/router";
import { Container } from "reactstrap";
import Edit from "../../components/Edit";

const EditPage = () => {
  const router = useRouter();
  return (
    <Container>
      <Edit id={router.query.id}></Edit>
    </Container>
  );
};

export default EditPage;
