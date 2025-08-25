import styled from "styled-components";

export const Border = styled.div`
  border: 1px solid gray;
  width: 375px;
  height: 120.5px;
  margin-left: 100px;
  margin-top: 100px;
  border-radius: 5px;
`;

export const Title = styled.div`
  color: var(--dot);
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const Subtitle = styled.div`
  color: var(--text-muted);
  margin-left: 16px;
  margin-top: 8px;
  margin-bottom: 14px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.div`
  border: transparent;
  border-radius: 99px;
  background-color: var(--secondary-employee);
  color: var(--primary-tabs);
  width: 73px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
`;

export const Price = styled.div`
  color: var(--dot);
  margin-right: 16px;
`;