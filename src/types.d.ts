
// Accepted Values: Active (A), Inactive (I), Terminated (T), Deceased (D), Retired (R), On Leave (V), Prehire W-2 (P), Not Hired (N)
export interface IEmployeeId {
  eecode: string;
  eebadge: number;
  clockseq: string;
  firstname: string;
  middlename: string;
  lastname: string;
}
