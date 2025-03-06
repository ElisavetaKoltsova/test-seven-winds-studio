export type TreeRow = {
  equipmentCosts: number;
  estimatedProfit: number;
  id: number;
  machineOperatorSalary:	number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
  total: number;
  child: TreeRow[];
};

export type TreeRowChild = {
  equipmentCosts: number;
  estimatedProfit: number;
  parentId: number;
  machineOperatorSalary:	number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  overheads: number;
  rowName: string;
  salary: number;
  supportCosts: number;
}
