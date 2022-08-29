import AboutMe from "./components/about-me/AboutMe";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Spinner from "./components/spinner/Spinner";
import { useProjects } from "./hooks";

function App() {
  const { loading, projects } = useProjects();

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
