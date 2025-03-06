import classNames from "classnames";
import { JSX, useState } from "react";
import styles from './List.module.scss';
import { ListItemIcon, TrashItemIcon } from "../icons/icons";
import { TreeRow } from "../../types/tree-rows";
import ListItemAdd from "./list-item-add";
import ListItemView from "./list-item-view";
import { useAppDispatch } from "../../hooks";
import { deleteTreeRowAction } from "../store/api-actions";
import LineConnections from "../icons/line-connections";

type ListItemProps = {
  listItem: TreeRow;
  creatingLevelStatus: boolean;
  editingLevelStatus?: boolean;
}

export default function ListItem({listItem, creatingLevelStatus, editingLevelStatus}: ListItemProps): JSX.Element {
  const [deleteViewStatus, setDeleteViewStatus] = useState(false);
  const [editStatus, setEditStatus] = useState(false);
  const dispatch = useAppDispatch();

  const handleListIconItemHover = () => {
    setDeleteViewStatus(true);
  };

  const handleListItemEditDoubleClick = () => {
    setEditStatus(true);
  };

  const handleListItemDeleteButtonClick = () => {
    dispatch(deleteTreeRowAction(listItem.id));
  };

  return (
    <tr className={classNames(styles.tr)}>
      <td className={styles.levelTd}>
        <LineConnections>
          <div className={styles.iconsWrapper} onMouseEnter={handleListIconItemHover}>
            <button
              title={'Создать дочерний элемент'}
            >
              <ListItemIcon />
            </button>
            {deleteViewStatus && (
              <button
                title={'Удалить элемент'}
                onClick={handleListItemDeleteButtonClick}
              >
                <TrashItemIcon />
              </button>
            )}
          </div>
        </LineConnections>
      </td>

      {!editStatus ? <ListItemView listItem={listItem} onDoubleClick={handleListItemEditDoubleClick} /> : ''}
      {/* {editStatus ? <ListItemAdd editStatus={editStatus} /> : ''} */}
    </tr>
  );
}
