import CstmButton from "@/shared/CstmButton/CstmButton";
import styles from "./page.module.css"
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.mainPage}>
      <div className={styles.mainBlock}>
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

          <Link
            href="/components"
            className={styles.libBtn}
          >
            <CstmButton>
              Open library
            </CstmButton>
          </Link>
        </div>

        <img
          className={styles.componentsImg}
          src="/components.png"
          alt="components"
          draggable="false"
        />
      </div>

      <div className={styles.advantagesBlock}>
        <h1 className={styles.heading}>
          Why you should choose <span className="bold">VanillaUI</span>
        </h1>
        <div className={styles.advantagesList}>
          <div className={styles.listItem}>
            <h2 className={styles.subHeading}>
              Nothing new
            </h2>
            <p className={styles.desc}>
              Components are written in pure React — just take
              them and use them in your projects. You don’t need
              to figure out how the library works or which options a
              specific component has — if you know React, you can
              use VanillaUI right away.
            </p>
          </div>

          <div className={styles.listItem}>
            <h2 className={styles.subHeading}>
              Security
            </h2>
            <p className={styles.desc}>
              If you’re working on a critical project and can’t use
              third-party libraries, VanillaUI is the perfect choice.
              Since VanillaUI is just pure React components, it’s
              completely secure.
            </p>
          </div>

          <div className={styles.listItem}>
            <h2 className={styles.subHeading}>
              No packages
            </h2>
            <p className={styles.desc}>
              This means no extra megabytes in your application
              build — and no extra megabytes means a faster
              frontend.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.helpBlock}>
        <h1 className={styles.heading}>
          How could you help <span className="bold">VanillaUI</span>
        </h1>
        <p className={styles.desc}>
          VanillaUI is made and maintained by a solo developer. Since VanillaUI is hosted on Vercel and uses GitHub as
          a database for components, it’s completely free to host. The best way to support it is by starring the VanillaUI
          <a href="https://github.com/dhelfy/vanillaui" target="_blank" rel="noopener noreferrer"><span className="bold"> repository</span></a> on GitHub <span className="bold">:)</span>
        </p>
      </div>
    </div>
  );
}

export default Home