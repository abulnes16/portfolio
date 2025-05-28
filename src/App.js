import AboutMe from "./components/about-me/AboutMe";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Spinner from "./components/spinner/Spinner";
import { useProjects } from "./hooks";
import ReactGA from "react-ga4";
import { useEffect } from "react";

ReactGA.initialize("G-QQF4T48FJ8");

function App() {
  const { loading, projects } = useProjects();

  useEffect(() => {
    // Enviar vista de página al cargar la aplicación
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        {loading ? <Spinner /> : <Projects projects={projects} />}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
