import { Route, Routes, useLocation, BrowserRouter } from "react-router-dom";
import "./App.css";

import Index from "./pages/index";
import Header from "./components/common/Header/Main";
import Collection from "./pages/collection/Index";
import Nft from "./pages/nft/Index";
import { useLayoutEffect } from "react";
import Dashboard from "./pages/userDashboard/Index";
import Page404 from "./pages/404";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <div>
        <BrowserRouter>
          <Wrapper>
            <Header />
            <Routes>
              <Route path="/">
                <Route index element={<Index />} />
                <Route path="collection/:id">
                  <Route index element={<Collection />} />
                </Route>
                <Route path="nft/:id">
                  <Route index element={<Nft />} />
                </Route>
                <Route path="dashboard">
                  <Route index element={<Dashboard />} />
                </Route>
                <Route path="*" element={<Page404 />} />
              </Route>
            </Routes>
          </Wrapper>
        </BrowserRouter>
    </div>
  );
}

export default App;