import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>My Portfolio</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;