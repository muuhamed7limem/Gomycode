import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>About Me</h1>
        <p>This is the about page of my portfolio website.</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;