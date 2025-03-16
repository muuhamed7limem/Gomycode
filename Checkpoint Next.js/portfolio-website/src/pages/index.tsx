import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>Welcome to My Portfolio</h1>
        <p>This is the home page of my portfolio website.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;