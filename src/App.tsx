import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/page";
import Layout from "./components/Layout/Layout";
import { AppContextProvider } from "./components/Context/AppContext";
import CurrentProductPage from "./pages/products/[id]/page";

const App = () => {
  return (
    <AppContextProvider>
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
          <Route
            path="products/:id"
            element={
              <Layout>
                <CurrentProductPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
