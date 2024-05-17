import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/header/Header";
const NotFound = lazy(() => import('./components/pages/NotFound'));
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Projects = lazy(() => import('./components/pages/Projects'));
const Resume = lazy(() => import('./components/pages/Resume'));
const Fork = lazy(() => import('./components/pages/Fork'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/resume" element={<Resume />}/>
          <Route path="/fork" element={<Fork />}/>
        </Route>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

function NavWrapper() {
  return (
    <>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default App;
