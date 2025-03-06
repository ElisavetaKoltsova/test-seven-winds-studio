import classNames from "classnames";
import { JSX, useState } from "react";
import styles from './List.style.scss';
import { ListItemIcon, TrashItemIcon } from "../icons/icons";

export default function ListItem(): JSX.Element {
  const [editStatus, setEditStatus] = useState(false);

  const handleListIconItemHover = () => {
    setEditStatus(true);
  };

  return (
    <tr className={classNames(styles.tr)}>
      <td className={styles.levelTd}>
          <div className={styles.iconsWrapper} onMouseEnter={handleListIconItemHover}>
            <button
              title={'Создать дочерний элемент'}
            >
              <ListItemIcon />
            </button>
            {editStatus && (
              <button
                title={'Удалить элемент'}
              >
                <TrashItemIcon />
              </button>
            )}
          </div>
      </td>

      <td>Название №1</td>
      <td>100 000</td>
      <td>20 000</td>
      <td>40 000</td>
      <td>200 000</td>

    </tr>
  );
}
