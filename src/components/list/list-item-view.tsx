import { JSX } from "react";
import { TreeRow } from "../../types/tree-rows";

type ListItemViewProps = {
  listItem: TreeRow;
  onDoubleClick: () => void;
}

export default function ListItemView({listItem, onDoubleClick}: ListItemViewProps): JSX.Element {
  return (
    <>
      <td onDoubleClick={onDoubleClick}>{listItem.rowName}</td>
      <td onDoubleClick={onDoubleClick}>{listItem.salary}</td>
      <td onDoubleClick={onDoubleClick}>{listItem.equipmentCosts}</td>
      <td onDoubleClick={onDoubleClick}>{listItem.overheads}</td>
      <td onDoubleClick={onDoubleClick}>{listItem.estimatedProfit}</td>
    </>
  );
}
