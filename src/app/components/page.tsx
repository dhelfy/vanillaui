import ComponentsList from "./ui/ComponentsList/ComponentsList";
import styles from "./styles.module.css"
import FiltersBlock from "./ui/FiltersBlock/FiltersBlock";
import { fetchComponents } from "@/API/componentsAPI";
import Error from "@/shared/Error/Error";

export default async function ComponentsPage() {

  try {
    let components = await fetchComponents()

    return (
      <div className={styles.componentsPage}>
        <FiltersBlock />
        <ComponentsList
          components={components}
        />
      </div>
    );
  } catch (error) {
    let e = error as Error

    return (
      <div className={styles.componentsPage}>
        <Error err={e.message} />
      </div>
    )
  }
}
