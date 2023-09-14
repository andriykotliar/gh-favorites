import { Suspense } from "react";
import { CircularProgress, Container } from "@mui/material";
import { Header } from "@/components";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "@/common";
import { SearchPage } from "@/pages";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Container>
        <Suspense fallback={<CircularProgress />}>
          <Routes>
            <Route path={AppRoutes.ROOT} element={<SearchPage />} />
          </Routes>
        </Suspense>
      </Container>
    </div>
  );
};

export default App;