import { FC, useState } from "react";
import { CstmSelect } from "../../../../shared/ui/CstmSelect/CstmSelect";
import styles from "./FiltersBlock.module.css"

export const FiltersBlock: FC = () => {
  const [selectedOption, setSelectedOption] = useState("")

  return (
    <div className={styles.filtersBlock}>
        <p>Filters</p>
        <CstmSelect 
          options={["Option 1", "Option 2", "Option 3"]} 
          onChange={(option) => setSelectedOption(option)} 
          value={selectedOption}
        />
    </div>
  );
};
