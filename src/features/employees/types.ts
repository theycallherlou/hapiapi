export interface IEmployeeSensitive {
  allocation_consecdt: number;
  allocation_consecot: number;
  allocation_dailydt: number;
  allocation_dailyot: number;
  allocation_garciaot: number;
  allocation_regrate: number;
  allocation_weeklydt: number;
  allocation_weeklyot: number;
  annual_salary: number;
  dist_1_acct_code: string;
  dist_1_amount: number;
  dist_1_rout_code: string;
  dist_1_type_code: string;
  dist_2_acct_code: string;
  dist_2_amount: number;
  dist_2_rout_code: string;
  dist_2_type_code: string;
  dist_3_acct_code: string;
  dist_3_amount: number;
  dist_3_rout_code: string;
  dist_3_type_code: string;
  dist_4_acct_code: string;
  dist_4_amount: number;
  dist_4_rout_code: string;
  dist_4_type_code: string;
  dist_5_amount: string;
  dist_5_rout_code: string;
  dist_5_type_code: string;
  dist_5_acct_code: string;
  dist_6_amount: number;
  dist_6_rout_code: string;
  dist_6_type_code: string;
  dist_6_acct_code: string;
  dist_7_amount: number;
  dist_7_rout_code: string;
  dist_7_type_code: string;
  dist_7_acct_code: string;
  dist_8_amount: number;
  dist_8_rout_code: string;
  dist_8_type_code: string;
  dist_8_acct_code: string;
  excessive_gross: number;
  excessive_net: number;
  hourly_salary: number;
  last_pay_rate: number;
  net_acct_code: string;
  net_rout_code: string;
  net_type_code: number;
  rate_1: number;
  rate_2: number;
  rate_3: number;
  rate_4: number;
  rate_5: number;
  ss_number: number;
  actual_marital_status: string;
  actual_marital_status_description: string;
  age: number;
  alternate_pay_frequency: string;
  available_health_insurance: boolean;
  birth_date: Date;
  business_title: string;
  city: string;
  clocksequencenumber: string;
  cobra_end: Date;
  cobra_start: Date;
  comission_only: boolean;
  current_key_employee: boolean;
  custom_standard_hours: number;
  department_code: string;
  department_description: string;
  eeoc_class: number;
  eeoc_class_description: string;
  ee_message: string;
  eligible_401k: Date;
  emergency_1_contact: string;
  emergency_1_phone: number;
  emergency_1_relationship: string;
  emergency_2_contact: string;
  emergency_2_phone: number;
  emergency_2_relationship: string;
  emergency_3_contact: string;
  emergency_3_phone: number;
  emergency_3_relationship: string;
  employee_added: Date;
  employee_badge: number;
  employee_code: string;
  employee_gl_code: string;
  employee_name: string;
  employee_status: string;
  employee_supervisor_level: string;
  employee_supervisor_pin: string;
  employee_terminal_group: string;
  employee_terminal_group_description: string;
  employee_type_1099: boolean;
  ethnic_background: string;
  firstname: string;
  fulltime_or_parttime: number;
  gender: string;
  has_direct_deposit: boolean;
  highly_comp_employee: number;
  hire_date: Date;
  hourly_or_salary: boolean;
  hours_401k: number;
  labor_allocation_details: string;
  lastname: string;
  last_pay_change: Date;
  last_position_change_date: Date;
  last_review: Date;
  leave_end: Date;
  leave_start: Date;
  length_of_service_since_hire: string;
  length_of_service_since_rehire: string;
  location: string;
  match_eligible: Date;
  manager_level: string;
  middlename: string;
  most_recent_check_date: Date;
  new_hire: boolean;
  new_hire_report_date: Date;
  next_review: Date;
  nickname: string;
  non_resident_alien: boolean;
  parttime_to_fulltime_date: Date;
  part_num_401k: string;
  participation_401k: Date;
  pay_class: string;
  pay_frequency: string;
  personal_email: string;
  position: string;
  position_code: string;
  position_family: string;
  position_family_code: string;
  position_family_name: string;
  position_id: string;
  position_level: string;
  position_seat_number: string;
  position_seat_title: string;
  position_title: string;
  previous_termination_date: Date;
  primary_phone: number;
  primary_phone_type: number;
  primary_schedule_group_description: string;
  print_ee_message: boolean;
  rehire_date: Date;
  report_new_hire: boolean;
  retirement_plan: boolean;
  schedule_group: number;
  schedule_time_zone: string;
  secondary_phone: number;
  secondary_phone_type: number;
  seniority_date: Date;
  state: string;
  statutory_employee: boolean;
  street: string;
  supervisor_approval: string;
  supervisor_approval_code: string;
  supervisor_primary: string;
  supervisor_primary_code: string;
  supervisor_quaternary: string;
  supervisor_quaternary_code: string;
  supervisor_secondary: string;
  supervisor_secondary_code: string;
  supervisor_talent: string;
  supervisor_talent_management: string;
  supervisor_tertiary: string;
  supervisor_tertiary_code: string;
  termination_reason: string;
  termination_type: string;
  termination_date: Date;
  union_code: string;
  vets_4212_emp_category: number;
  vets_4212_job_category: number;
  workers_comp_code: string;
  workers_comp_desc: string;
  work_email: string;
  zipcode: string;
  cat1: string;
  cat1desc: string;
  cat2: string;
  cat2desc: string;
  cat3: string;
  cat3desc: string;
  cat4: string;
  cat4desc: string;
  cat5: string;
  cat5desc: string;
  cat6: string;
  cat6desc: string;
  cat7: string;
  cat7desc: string;
  cat8: string;
  cat8desc: string;
  cat9: string;
  cat9desc: string;
  cat10: string;
  cat10desc: string;
  cat11: string;
  cat11desc: string;
  cat12: string;
  cat12desc: string;
  cat13: string;
  cat13desc: string;
  cat14: string;
  cat14desc: string;
  cat15: string;
  cat15desc: string;
  cat16: string;
  cat16desc: string;
  cat17: string;
  cat17desc: string;
  cat18: string;
  cat18desc: string;
  cat19: string;
  cat19desc: string;
  cat20: string;
  cat20desc: string;
  companyLocationId: number;
  companyEstablishmentId: number;
  dol_status: string;
  exempt_status: string;
}

export interface IEmployee {
  actual_marital_status: string;
  actual_marital_status_description: string;
  age: number;
  alternate_pay_frequency: string;
  available_health_insurance: boolean;
  birth_date: Date;
  business_title: string;
  city: string;
  clocksequencenumber: string;
  cobra_end: Date;
  cobra_start: Date;
  comission_only: boolean;
  current_key_employee: boolean;
  custom_standard_hours: number;
  department_code: string;
  department_description: string;
  eeoc_class: number;
  eeoc_class_description: string;
  ee_message: string;
  eligible_401k: Date;
  emergency_1_contact: string;
  emergency_1_phone: number;
  emergency_1_relationship: string;
  emergency_2_contact: string;
  emergency_2_phone: number;
  emergency_2_relationship: string;
  emergency_3_contact: string;
  emergency_3_phone: number;
  emergency_3_relationship: string;
  employee_added: Date;
  employee_badge: number;
  employee_code: string;
  employee_gl_code: string;
  employee_name: string;
  employee_status: string;
  employee_supervisor_level: string;
  employee_supervisor_pin: string;
  employee_terminal_group: string;
  employee_terminal_group_description: string;
  employee_type_1099: boolean;
  ethnic_background: string;
  firstname: string;
  fulltime_or_parttime: number;
  gender: string;
  has_direct_deposit: boolean;
  highly_comp_employee: number;
  hire_date: Date;
  hourly_or_salary: boolean;
  hours_401k: number;
  labor_allocation_details: string;
  lastname: string;
  last_pay_change: Date;
  last_position_change_date: Date;
  last_review: Date;
  leave_end: Date;
  leave_start: Date;
  length_of_service_since_hire: string;
  length_of_service_since_rehire: string;
  location: string;
  match_eligible: Date;
  manager_level: string;
  middlename: string;
  most_recent_check_date: Date;
  new_hire: boolean;
  new_hire_report_date: Date;
  next_review: Date;
  nickname: string;
  non_resident_alien: boolean;
  parttime_to_fulltime_date: Date;
  part_num_401k: string;
  participation_401k: Date;
  pay_class: string;
  pay_frequency: string;
  personal_email: string;
  position: string;
  position_code: string;
  position_family: string;
  position_family_code: string;
  position_family_name: string;
  position_id: string;
  position_level: string;
  position_seat_number: string;
  position_seat_title: string;
  position_title: string;
  previous_termination_date: Date;
  primary_phone: number;
  primary_phone_type: number;
  primary_schedule_group_description: string;
  print_ee_message: boolean;
  rehire_date: Date;
  report_new_hire: boolean;
  retirement_plan: boolean;
  schedule_group: number;
  schedule_time_zone: string;
  secondary_phone: number;
  secondary_phone_type: number;
  seniority_date: Date;
  state: string;
  statutory_employee: boolean;
  street: string;
  supervisor_approval: string;
  supervisor_approval_code: string;
  supervisor_primary: string;
  supervisor_primary_code: string;
  supervisor_quaternary: string;
  supervisor_quaternary_code: string;
  supervisor_secondary: string;
  supervisor_secondary_code: string;
  supervisor_talent: string;
  supervisor_talent_management: string;
  supervisor_tertiary: string;
  supervisor_tertiary_code: string;
  termination_reason: string;
  termination_type: string;
  termination_date: Date;
  union_code: string;
  vets_4212_emp_category: number;
  vets_4212_job_category: number;
  workers_comp_code: string;
  workers_comp_desc: string;
  work_email: string;
  zipcode: string;
  cat1: string;
  cat1desc: string;
  cat2: string;
  cat2desc: string;
  cat3: string;
  cat3desc: string;
  cat4: string;
  cat4desc: string;
  cat5: string;
  cat5desc: string;
  cat6: string;
  cat6desc: string;
  cat7: string;
  cat7desc: string;
  cat8: string;
  cat8desc: string;
  cat9: string;
  cat9desc: string;
  cat10: string;
  cat10desc: string;
  cat11: string;
  cat11desc: string;
  cat12: string;
  cat12desc: string;
  cat13: string;
  cat13desc: string;
  cat14: string;
  cat14desc: string;
  cat15: string;
  cat15desc: string;
  cat16: string;
  cat16desc: string;
  cat17: string;
  cat17desc: string;
  cat18: string;
  cat18desc: string;
  cat19: string;
  cat19desc: string;
  cat20: string;
  cat20desc: string;
  companyLocationId: number;
  companyEstablishmentId: number;
  dol_status: string;
  exempt_status: string;
}

export interface IEmployeeCustomFields {
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

export interface IEmployeeDirectory {
  eecode: string;
  eename: string;
  firstname: string;
  lastname: string;
  gender: string;
  streetaddr: string;
  cityaddr: string;
  clockseq: string;
  eebadge: number;
  zipcode: string;
  homestate: string;
  homephone: string;
  eestatus: string;
  deptcode: string;
  deptdesc: string;
  cat1: string;
  cat1desc: string;
  cat2: string;
  cat2desc: string;
  cat3: string;
  cat3desc: string;
  cat4: string;
  cat4desc: string;
  cat5: string;
  cat5desc: string;
  cat6: string;
  cat6desc: string;
  cat7: string;
  cat7desc: string;
  cat8: string;
  cat8desc: string;
  cat9: string;
  cat9desc: string;
  cat10: string;
  cat10desc: string;
  cat11: string;
  cat11desc: string;
  cat12: string;
  cat12desc: string;
  cat13: string;
  cat13desc: string;
  cat14: string;
  cat14desc: string;
  cat15: string;
  cat15desc: string;
  cat16: string;
  cat16desc: string;
  cat17: string;
  cat17desc: string;
  cat18: string;
  cat18desc: string;
  cat19: string;
  cat19desc: string;
  cat20: string;
  cat20desc: string;
}

export interface IEmployeeDirectoryCallResponse {
  data: IEmployeeDirectory[];
  total: number;
}

// Accepted Values: Active (A), Inactive (I), Terminated (T), Deceased (D), Retired (R), On Leave (V), Prehire W-2 (P), Not Hired (N)
export interface IEmployeeId {
  eecode: string;
  eebadge: number;
  clockseq: string;
  firstname: string;
  middlename: string;
  lastname: string;
}
