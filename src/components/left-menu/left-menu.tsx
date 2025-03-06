import { useState } from 'react';
import classNames from 'classnames';
import styles from './LeftMenu.style.scss';
import { LeftMenuItemIcon } from '../icons/icons';

interface MenuItem {
  id: number;
  title: string;
}

const menuLinkList: MenuItem[] = [
  { id: 1, title: 'По проекту'},
  { id: 2, title: 'Объекты'},
  { id: 3, title: 'РД'},
  { id: 4, title: 'МТО'},
  { id: 5, title: 'СМР'},
  { id: 6, title: 'График'},
  { id: 7, title: 'МиМ'},
  { id: 8, title: 'Рабочие'},
  { id: 9, title: 'Капвложения'},
  { id: 10, title: 'Бюджет'},
  { id: 11, title: 'Финансирование'},
  { id: 12, title: 'Панорамы'},
  { id: 13, title: 'Камеры'},
  { id: 14, title: 'Поручения'},
  { id: 15, title: 'Контрагенты'},
];

export function LeftMenu() {
  const [currentId, setCurrentId] = useState(5);

  return (
    <div className={styles.LeftMenu}>
      <ul className={styles.list}>
        {menuLinkList.map((el) => (
          <li key={el.id} className={classNames(styles.link, el.id === currentId && styles.linkActive)}>
            <button onClick={() => setCurrentId(el.id)}>
              <LeftMenuItemIcon /> {el.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
