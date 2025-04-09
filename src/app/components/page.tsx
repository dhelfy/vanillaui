import ComponentsList from "@/components/ComponentsList/ComponentsList";
import { FiltersBlock } from "@/components/FiltersBlock/FiltersBlock";
import styles from "./styles.module.css"

export default function ComponentsPage() {
  return (
    <div className={styles.componentsPage}>
      <FiltersBlock />
      <ComponentsList />
    </div>
  );
}
