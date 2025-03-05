import { JSX, useState } from "react";
import { HeaderBottomArrowDownIcon, HeaderTopBackIcon, HeaderTopGridIcon } from "../icons/icons";
import styles from './Header.module.scss';
import classNames from "classnames";

interface MenuItem {
  id: number;
  title: string;
}

const menuLinkList: MenuItem[] = [
  { id: 1, title: 'Просмотр'},
  { id: 2, title: 'Управление'},
];

export default function Header(): JSX.Element {
  const [currentId, setCurrentId] = useState(1);
  
  return (
    <>
    <div className={styles.HeaderTop}>
      <HeaderTopGridIcon />
      <HeaderTopBackIcon />
      <ul className={styles.list}>
        {menuLinkList.map((el) => (
          <li key={el.id}>
            <button
              className={classNames(styles.button, el.id === currentId && styles.buttonActive)}
              onClick={() => setCurrentId(el.id)}
            >
              {el.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
    <div className={styles.HeaderBottom}>
      <div className={styles.left}>
        <div>
          <div className={styles.title}>Название проекта</div>
          <div className={styles.helper}>Аббревиатура</div>
        </div>
        <button className={styles.arrowDownButton}>
          <HeaderBottomArrowDownIcon />
        </button>
      </div>
      <div className={styles.right}>Строительно-монтажные работы</div>
    </div>
    </>
  );
}
