import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>My Projects</h1>
        <div className={styles.projects}>
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;