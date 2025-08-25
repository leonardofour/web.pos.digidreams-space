"use client"
import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import Text from "../text/text";
import {
  DropdownContainer,
  DropdownButton,
  DropdownList,
  DropdownItem,
  EmployeeInfo,
  EmployeeName,
  // ShiftTime,
  Avatar,
  ChevronIcon,
} from "./employees.styled";

interface Employee {
  id: number;
  displayName: string;
  email: string;
  avatar?: string | StaticImageData;
  shift?: string;
}

interface Props {
  data: { users: Employee[] };
  onSelect?: (employee: Employee) => void;
  placeholder?: string;
  loading?: boolean;
  searchable?: boolean;
}

const getAvatarUrl = (employee: Employee): string => 
  typeof employee.avatar === 'string' 
    ? employee.avatar 
    : employee.avatar?.src || `https://i.pravatar.cc/40?u=${employee.id}`;

// const formatShift = (shift?: string): string => 
//   shift || "No shift assigned";

const filterEmployees = (employees: Employee[], search: string): Employee[] => 
  search.trim() 
    ? employees.filter(emp => 
        emp.displayName.toLowerCase().includes(search.toLowerCase()) ||
        emp.email.toLowerCase().includes(search.toLowerCase())
      )
    : employees;

const LoadingState = () => (
  <DropdownContainer>
    <DropdownButton disabled>
      <EmployeeInfo>
        <EmployeeName>
          <Text variant="body" level={4}>Loading employees...</Text>
        </EmployeeName>
      </EmployeeInfo>
      <ChevronIcon $isOpen={false} />
    </DropdownButton>
  </DropdownContainer>
);

const SearchInput = ({ value, onChange }: { value: string; onChange: (value: string) => void }) => (
  <div style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
    <input
      type="text"
      placeholder="Search employees..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: '100%',
        padding: '8px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '14px'
      }}
    />
  </div>
);

const EmployeeDisplay = ({ employee, isButton = false }: { employee: Employee; isButton?: boolean }) => (
  <>
    <Avatar>
      <Image
        src={getAvatarUrl(employee)}
        alt={employee.displayName}    
        width={40}
        height={40}
        loading={isButton ? "eager" : "lazy"}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0eH/xAAVAQEBAQEAAAAAAAAAAAAAAAAAAQIF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyLFLjByj2lQ7g+BVQyH3qccOYIEZMjJ2pqgEFRQhKDQkbhPFiJGx0Lp2WiADsJJdIaHRhYKgb5ij6VJEQBhDEoLwsQhIEBwJiEIGfpuHWxQ2o/qpKBKz5hLiPIrfBQnpHgkMhQT3/9k="
      />
    </Avatar>
    <EmployeeInfo>
      <EmployeeName>
        <Text variant="subtitle" level={3}>
          {employee.displayName}
        </Text>
      </EmployeeName>
      {/* <ShiftTime>
        <Text variant="body" level={4}>
          {formatShift(employee.shift)}
        </Text>
      </ShiftTime> */}
    </EmployeeInfo>
  </>
);

const EmptyState = ({ hasSearch, searchTerm }: { hasSearch: boolean; searchTerm: string }) => (
  <div style={{ padding: '16px', textAlign: 'center', color: '#999' }}>
    {hasSearch && searchTerm ? 'No employees found' : 'No employees available'}
  </div>
);

const EmployeeShiftDropdown: React.FC<Props> = ({
  data,
  onSelect,
  placeholder = "Select Employee",
  loading = false,
  searchable = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Employee | null>(null);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const employees = useMemo(() => 
    filterEmployees(data?.users || [], search), 
    [data?.users, search]
  );

  const handleSelect = useCallback((employee: Employee) => {
    setSelected(employee);
    setIsOpen(false);
    setSearch("");
    onSelect?.(employee);
  }, [onSelect]);

  const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (loading) return <LoadingState />;

  return (
    <DropdownContainer ref={dropdownRef}>
      <DropdownButton onClick={toggleDropdown}>
        {selected ? (
          <EmployeeDisplay employee={selected} isButton />
        ) : (
          <EmployeeInfo>
            <EmployeeName>
              <Text variant="body" level={4}>{placeholder}</Text>
            </EmployeeName>
          </EmployeeInfo>
        )}
        <ChevronIcon $isOpen={isOpen} />
      </DropdownButton>

      <DropdownList $isOpen={isOpen}>
        {searchable && (
          <SearchInput value={search} onChange={setSearch} />
        )}
        
        {employees.length === 0 ? (
          <EmptyState hasSearch={searchable} searchTerm={search} />
        ) : (
          employees.map((employee, index) => (
            <DropdownItem
              key={`${employee.id}-${index}`}
              $isSelected={selected?.id === employee.id}
              onClick={() => handleSelect(employee)}
            >
              <EmployeeDisplay employee={employee} />
            </DropdownItem>
          ))
        )}
      </DropdownList>
    </DropdownContainer>
  );
};

export default EmployeeShiftDropdown;
export type { Employee, Props as EmployeeShiftDropdownProps };