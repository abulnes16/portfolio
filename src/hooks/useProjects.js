import { useEffect, useState } from "react";
import { firestore, storage } from "../modules/firebase";

export const useProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects();
  }, []);

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

  return {
    loading,
    projects,
  };
};
