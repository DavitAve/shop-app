import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/page";
import Layout from "./components/Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
