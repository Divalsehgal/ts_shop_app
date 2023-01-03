import { Suspense, lazy } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar"
const Store = lazy(() => import("./Store"));
const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));

function App() {
  return (
    <>
    <Navbar>
      <Container className="mb-4">
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/store" element={<Store />} />
            <Route path="*" element={<>Invalid 404 url</>} />
          </Routes>
        </Suspense>
      </Container>
      </Navbar>
    </>
  );
}

export default App;
