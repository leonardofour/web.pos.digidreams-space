import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 382px;

  @media (max-width: 1200px) {
    width: 250px;
  }
`;

export const DropdownButton = styled.button`
  width: 100%;
  height: 71px;
  padding: 10px 20px;
  background: var(--netral-100);
  border: none;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  //maybe this style is still use, so dont delete it
  /* transition: all 0.1s ease-in-out; */
  border: 2px solid var(--dropdown);
  font-family: var(--font-inter);

  &:focus {
    outline: none;
    border: 2px solid var(--primary);
  }

  @media  (max-width: 1200px) {
    height: 55px;
  }
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const EmployeeInfo = styled.div`
  flex: 1;
  text-align: left;
`;

export const EmployeeName = styled.div`
  color: var(--text);
  margin-bottom: 2px;
`;

export const ShiftTime = styled.div`
  color: var(--netral-600);
`;

export const ChevronIcon = styled.div<{ $isOpen: boolean }>`
  width: 20px;
  height: 20px;
  transition: transform 0.2s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};

  &::after {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-right: 2px solid var(--netral-600);
    border-bottom: 2px solid var(--netral-600);
    transform: rotate(45deg);
    margin: 4px auto;
  }
`;

export const DropdownList = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: var(--dropdown);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  scrollbar-width: none;

  display: ${(props) => (props.$isOpen ? "block" : "none")};
`;

export const DropdownItem = styled.div<{ $isSelected: boolean }>`
  padding: ${(props) => (props.$isSelected ? "10px" : "12px 20px")};
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background: ${(props) =>
    props.$isSelected ? "var(--secondary-employee)" : "var(--dropdown)"};
  border: none;
  margin: ${(props) => (props.$isSelected ? "12px 10px" : "0")};
  border-radius: ${(props) => (props.$isSelected ? "8px" : "0")};

  &:hover {
    background: var(--secondary-employee);
  }
`;
