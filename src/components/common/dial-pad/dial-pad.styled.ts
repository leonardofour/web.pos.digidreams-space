import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
`;

export const DialPadContainer = styled.div`
  background: var(--background);
  border-radius: 16px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 382px;
  gap: 20px 83px;
  padding: 0 12px;

  @media (max-width: 1200px) {
    width: 369px;
    gap: 10px 55px;
    padding: 0;
    
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
  background: var(--background);
  color: var(--text);
  font-family: var(--font-inter);
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    width: 100%;
  }

  @media (max-width: 1200px) {
    height: 45px;
  }
`;

export const DeleteButton = styled(Button)`
  background: transparent;
`;
