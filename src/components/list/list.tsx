import { JSX } from "react";
import { ListItemIcon } from "../icons/icons";
import styles from './List.style.scss';
import ListItem from "./list-item";

export default function List(): JSX.Element {
  return (
    <div className={styles.ListWrapper}>
      <table className={styles.List}>
        <thead>
          <tr>
            <th>
              <span className={styles.levelHeaderWrapper}>
                <button title={'Создать корневой элемент'}>
                  <ListItemIcon />
                </button>
                <span>Уровень</span>
              </span>
            </th>
            <th>Наименование работ</th>
            <th>Основная з/п</th>
            <th>Оборудование</th>
            <th>Накладные расходы</th>
            <th>Сметная прибыль</th>
          </tr>
        </thead>
        <tbody>
          <ListItem />
        </tbody>
      </table>
    </div>
  );
}
