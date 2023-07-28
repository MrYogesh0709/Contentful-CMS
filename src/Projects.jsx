import useFetchProjects from "./fetchProjects";

const Projects = () => {
  const { loading, projects } = useFetchProjects();
  return (
    <section className="projects">
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <div className="title">
            <h2>projects</h2>
            <div className="title-underline"></div>
          </div>
          <div className="projects-center">
            {projects.map((project) => {
              const { id, img, url, title, sourceCode } = project;
              return (
                <div className="project" key={id}>
                  <img src={img} alt={title} className="img" />
                  <h5>{title}</h5>
                  <div className="url-display">
                    <a
                      className="button"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit Site
                    </a>
                    <a
                      className="button"
                      href={sourceCode}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Show Code
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
