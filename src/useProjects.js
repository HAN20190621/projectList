import { useState, useEffect } from "react";
// import useGetRequest from "./useGetRequest";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  //    const { get } = useGetRequest('./projects.json');

  useEffect(() => {
    const fetchProjects = async () => {
      // const projects = await get();
      const response = await fetch("./projects.json");
      const projects = await response.json();
      setProjects(projects);
    };
    fetchProjects();
  }, []);

  return { projects };
};

export default useProjects;
