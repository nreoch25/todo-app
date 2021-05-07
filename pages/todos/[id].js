import { useRouter } from "next/router";

const TodoDetail = () => {
  const router = useRouter();
  console.log("ROUTER", router);
  return (
    <div>
      <h1>Todo Detail {router.query.id}</h1>
    </div>
  );
};

export default TodoDetail;
