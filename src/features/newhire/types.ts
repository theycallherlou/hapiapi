// --New Hire--
export interface INewHire {
  firstName: string;
  lastName: string;
  middleName: string;
  newHireId: number;
  newEmployeeCode: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  birthDate: string;
  primaryPhone: string;
  gender: string;
  nickName: string;
  zipCodeExtension: string;
  secondaryPhone: string;
  personalEmail: string;
  maritalStatus: string;
  eeocEhnicity: string;
  emergencyContact1: string;
  emergencyContact2: string;
  emergencyContact3: string;
  hireDate: string;
  laborAllocation: string;
  eeocCategory: string;
  location: string;
  workEmail: string;
  primarySupervisor: string;
  timeOffSupervisor: string;
  secondarySupervisor: string;
  tertiarySupervisor: string;
  quarternarySupervisor: string;
  talentManagementSupervisor: string;
  participationDate401k: string;
  workersCompCode: string;
  clockSequenceNumber: string;
  employeeGlCode: string;
  payClass: string;
  terminalAccessGroup: string;
  primaryScheduleGroup: string;
  scheduleTimeZone: string;
  badgeNumber: string;
  vets4212JobCategory: string;
  vets4212EmployeeCategory: string;
  positionSeat: string;
  position: string;
  positionTitle: string;
  positionFamily: string;
  positionLevel: string;
  managerLevel: string;
}

// --New Hire Id--
export interface INewHireId {
  new_hire_id: number;
  eecode: string;
  status: string;
}

// --New Hire Custom Fields--
export interface INewHireCustomFields {
  'CustomSelect<01-127>': {
    description: string;
    value: string;
  };
  'CustomText<01-127>': {
    description: string;
    value: string;
  };
  'CustomDate<01-127>': {
    description: string;
    value: string;
  };
}
