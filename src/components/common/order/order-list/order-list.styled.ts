import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  height: 89px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border-radius: 5px;
  background-color: var(--background);
  color: var(--text);

  @media (min-width: 1440px) {
    width: 100%;
  }
`;

export const TableIcon = styled.div`
  background-color: var(--secondary-list);
  width: 51px;
  height: 51px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 14px;
`;

export const TableNumber = styled.span`
  color: var(--primary-table);
`;

export const TextWrapper = styled.div`
  flex-grow: 1;
`;

export const CustomerName = styled.div`
  margin-bottom: 4px;
`;

export const ItemCount = styled.div`
  color: var(--netral-600);
`;

