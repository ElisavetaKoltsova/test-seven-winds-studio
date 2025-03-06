import { useState } from "react";
import { JSX } from "react";
import styles from "./ListItemAdd.module.scss";
import { TreeRow } from "../../types/tree-rows";
import { postTreeRowAction } from "../store/api-actions";
import { useAppDispatch } from "../../hooks";

type ListItemAddProps = {
  editStatus?: boolean;
  onSubmit: () => void;
};

type FormData = Pick<TreeRow, "rowName" | "salary" | "equipmentCosts" | "estimatedProfit" | "overheads">;

const defaultFormData: TreeRow = {
  rowName: "",
  salary: 0,
  equipmentCosts: 0,
  estimatedProfit: 0,
  mainCosts: 0,
  materials: 0,
  overheads: 0,
  mimExploitation: 0,
  machineOperatorSalary: 0,
  supportCosts: 0,
  total: 0,
  id: Date.now(),
  child: [],
};

export default function ListItemAdd({ editStatus, onSubmit }: ListItemAddProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<Partial<FormData>>({
    rowName: "",
    salary: 0,
    equipmentCosts: 0,
    estimatedProfit: 0,
    overheads: 0,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateField = (name: keyof FormData, value: string) => {
    if (name === "rowName" && !value.trim()) {
      return "Обязательное поле";
    }
    if (name !== "rowName" && (value === "" || Number(value) < 0)) {
      return "Минимальное значение 0";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: name === "rowName" ? value : Number(value) || 0 }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name as keyof FormData, value) }));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTableRowElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const hasErrors = Object.values(errors).some((error) => error);
      if (!hasErrors) {
        dispatch(postTreeRowAction({ ...defaultFormData, ...formData }));
        onSubmit();
      }
    }
  };

  return (
    <>
      <td>
        <span className={styles.field} onKeyDown={handleKeyDown}>
          <input
            type="text"
            className={styles.input}
            autoFocus
            name="rowName"
            value={formData.rowName}
            onChange={handleChange}
          />
          {errors.rowName && <span className={styles.error}>{errors.rowName}</span>}
        </span>
      </td>
      {["salary", "equipmentCosts", "estimatedProfit", "overheads"].map((field) => (
        <td key={field}>
          <span className={styles.field} onKeyDown={handleKeyDown}>
            <input
              type="number"
              className={styles.input}
              name={field}
              value={formData[field as keyof FormData]}
              onChange={handleChange}
            />
            {errors[field as keyof FormData] && <span className={styles.error}>{errors[field as keyof FormData]}</span>}
          </span>
        </td>
      ))}
    </>
  );
}
