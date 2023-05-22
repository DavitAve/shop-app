import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./components/Context/AppContext";
import Layout from "./components/Layout/Layout";
import HomePage from "./pages/page";
import CurrentProductPage from "./pages/products/[id]/page";
import ProductsPage from "./pages/products/page";

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
          <Route
            path="products"
            element={
              <Layout>
                <ProductsPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
