import { JSX } from "react";
import styles from './MainSection.style.scss';
import List from "../list/list";

export default function MainSection(): JSX.Element {
  return (
    <div className={styles.MainSection}>
      <List />
    </div>
  );
}
