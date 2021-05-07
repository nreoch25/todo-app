import Layout from "../components/Layout";
import { TodosProvider } from "../context/TodosContext";

const MyApp = ({ Component, pageProps }) => {
  return (
    <TodosProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TodosProvider>
  );
};

export default MyApp;
