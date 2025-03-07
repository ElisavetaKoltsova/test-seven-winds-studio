import { JSX, useState } from "react";
import { ListItemIcon, TrashItemIcon } from "../icons/icons";
import styles from './List.module.scss';
import ListItem from "./list-item";
import { useAppSelector } from "../../hooks";
import { getTreeRows } from "../store/tree-row-data/selectors";
import ListItemAdd from "./list-item-add";
import classNames from "classnames";
import LineConnections from "../icons/line-connections";

export default function List(): JSX.Element {
  const [creatingLevelStatus, setCreatingLevelStatus] = useState(false);
  const [deleteStatus, setDeleteStatus] = useState(false);

  const treeRows = useAppSelector(getTreeRows);

  const handleCreateLevelButtonClick = () => {
    setCreatingLevelStatus(!creatingLevelStatus);
  };

  const handleCreateLevelButtonSubmit = () => {
    setCreatingLevelStatus(false);
  };

  const handleDeleteLevelIconHover = () => {
    setDeleteStatus(true);
  };

  const handleDeleteLevelButtonClick = () => {
    setCreatingLevelStatus(false);
  };
  
  return (
    <div className={styles.ListWrapper}>
      <table className={styles.List}>
        <thead>
          <tr>
            <th>
              <span className={styles.levelHeaderWrapper}>
                <button
                  title={'Создать корневой элемент'}
                  onClick={handleCreateLevelButtonClick}
                >
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
          {
            treeRows && treeRows.map((treeRow, index) => <ListItem key={treeRow.id} index={index} level={0} listItem={treeRow} />)
          }

          { treeRows.length === 0 ? (<tr className={classNames(styles.tr)}>
                <td className={styles.levelTd}>
                  <LineConnections lastElement={false}>
                  <div className={styles.iconsWrapper} onMouseEnter={handleDeleteLevelIconHover}>
                    <button
                      title={'Создать дочерний элемент'}
                    >
                      <ListItemIcon />
                    </button>
                    {deleteStatus && (
                      <button
                        title={'Удалить элемент'}
                        onClick={handleDeleteLevelButtonClick}
                      >
                        <TrashItemIcon />
                      </button>
                    )}
                  </div>
                  </LineConnections>
                </td>
                <ListItemAdd onSubmit={handleCreateLevelButtonSubmit} />
              </tr>) : ''}

          {
            creatingLevelStatus ?
              (<tr className={classNames(styles.tr)}>
                <td className={styles.levelTd}>
                  <LineConnections lastElement={false}>
                  <div className={styles.iconsWrapper} onMouseEnter={handleDeleteLevelIconHover}>
                    <button
                      title={'Создать дочерний элемент'}
                    >
                      <ListItemIcon />
                    </button>
                    {deleteStatus && (
                      <button
                        title={'Удалить элемент'}
                        onClick={handleDeleteLevelButtonClick}
                      >
                        <TrashItemIcon />
                      </button>
                    )}
                  </div>
                  </LineConnections>
                </td>
                <ListItemAdd onSubmit={handleCreateLevelButtonSubmit} />
              </tr>) : ''
          }
        </tbody>
      </table>
    </div>
  );
}
