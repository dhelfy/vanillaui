import styles from "./page.module.css"

const Home = () => {
  return (
    <div className={styles.mainInfo}>
      <h1 className={styles.mainHeading}>
        VanillaUI is a component library, 
        that lets you break free from packages 
        in your projects
      </h1>
      <p className={styles.mainDescription}>
        Don’t spend your time on writing code. 
        Get strong basement for your components from our library.
        <span className={styles.boldText}> 
          &nbsp;It’s actually that simple!
        </span>
      </p>
    </div>
  );
}

export default Home