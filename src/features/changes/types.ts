// --An Employee with Changes - Sensitive--
export interface IEmployeeChangesSensitive {
  changedby: string;
  changedesc: string;
  changetime: Date;
  changetype: string;
  childcode: string;
  clockseq: string;
  eecode: string;
  eename: string;
  new_value: string;
  notes: string;
  old_value: string;
  usetype: string;
}

// codes: System (0), Client User (1), Employee (2), System (3)
export interface IEmployeeChanges {
  changeId: string;
  changedby: string;
  changedesc: string;
  changetime: Date;
  changetype: string;
  childcode: string;
  clockseq: string;
  eecode: string;
  eename: string;
  new_value: string;
  notes: string;
  old_value: string;
  usetype: string;
}

// --List of Employee Codes for Employees with Changes--
export interface IEECodesOfEmployeesWithChanges {
  eecode: string;
  changescount: number;
}
