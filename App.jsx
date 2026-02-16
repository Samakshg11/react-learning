import React from "react"
import Hero from "./components/Hero.jsx";
import styles from "./styles/App.module.css";
import ContactForm from "./components/contactForm.jsx";
import Counter from "./components/counter.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

export default function App() {
  return (
    // <div className={styles.container}>
    //   <Hero />
    // </div>
    <div style={{padding:"40px"}}>
  

      <ThemeToggle/>

    </div>

  );
}
