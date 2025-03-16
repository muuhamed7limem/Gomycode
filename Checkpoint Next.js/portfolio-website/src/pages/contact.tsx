import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1>Contact Me</h1>
        <p>This is the contact page of my portfolio website.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;