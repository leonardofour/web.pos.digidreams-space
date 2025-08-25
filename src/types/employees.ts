export interface Employee {
  id: string;
  displayName: string;
  shift: string;
}

export interface EmployeeResponse {
  data: {
    employees: Employee[];
  };
}

export interface EmployeeShiftProps {
  employee: Employee;
  isSelected?: boolean;
  onClick?: (employee: Employee) => void;
}