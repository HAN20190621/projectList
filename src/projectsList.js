const ProjectsList = (props) => {
  return (
    <>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {props.projects.map((h) => (
              <tr key={h.id}>
                <td></td>
                <td>{h.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProjectsList;
