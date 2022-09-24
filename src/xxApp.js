//import "./App.css";
//import AddProject from './components/addProject';
import ProjectsList from "./projectsList";
import useProjects from "./useProjects";

function App() {
  const { projects } = useProjects();
  return (
    <div className="App">
      <ProjectsList projects={projects} />
    </div>
  );
}

export default App;
