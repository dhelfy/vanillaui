import ComponentsList from "./ui/ComponentsList/ComponentsList";
import styles from "./styles.module.css"
import FiltersBlock from "./ui/FiltersBlock/FiltersBlock";

export default function ComponentsPage() {
  return (
    <div className={styles.componentsPage}>
      <FiltersBlock />
      <ComponentsList />
    </div>
  );
}
