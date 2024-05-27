import { Routes, Route, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
const NotFound = lazy(() => import('./components/pages/NotFound'));
const Home = lazy(() => import('./components/pages/Home'));
const About = lazy(() => import('./components/pages/About'));
const Projects = lazy(() => import('./components/pages/Projects'));
const Resume = lazy(() => import('./components/pages/Resume'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavWrapper />}>
          <Route path="/" index element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/resume" element={<Resume />}/>
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
      <Suspense fallback={
        <h1>Loading...</h1>
        }>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default App;
