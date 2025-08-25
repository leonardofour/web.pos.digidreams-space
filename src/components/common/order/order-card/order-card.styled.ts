import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: var(--background);
  color: var(--text);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 184px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const InfoGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const TableBox = styled.div`
  background-color: var(--secondary-list);
  color: var(--primary-table);
  width: 51px;
  height: 51px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomerTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

export const MetaText = styled.div`
  color: var(--netral-600);
`;

export const MiddleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Line = styled.hr`
  border: none;
  border-top: 1px solid var(--netral-200);
`;
