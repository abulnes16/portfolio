import { useState, useEffect } from "react";
import AboutMe from "./components/about-me/AboutMe";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Projects from "./components/projects/Projects";
import Spinner from "./components/spinner/Spinner";

import { firestore, storage } from "./modules/firebase";

function App() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    try {
      const snapshot = await firestore.collection("projects").get();
      const projects = await Promise.all(
        snapshot.docs.map(async (doc) => {
          const data = doc.data();
          const img = await storage.refFromURL(data.img).getDownloadURL();
          return { id: doc.id, ...data, img };
        })
      );
      setProjects(projects);
    } catch (error) {
      console.error(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    getProjects();
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
