import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/page";
import Layout from "./components/Layout/Layout";
import { AppContextProvider } from "./components/Context/AppContext";

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
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
};

export default App;
