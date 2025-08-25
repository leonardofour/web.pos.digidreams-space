import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 880px;
  padding: 20px 32px 0 32px;
  background-color: var(--netral-100);
`;
export const Header = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title-page {
    color: var(--text);
  }
`;
export const ContentArea = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, minmax(300px, 1fr));
  }
`;

export const NoOrdersContainer = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1; 
`;

export const NoOrderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 266px;
  height: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 16px;
`;

export const CircleNoOrder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 126px;
  border-radius: 50%;
  background-color: var(--secondary-modal);
`;

export const NoOrderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 24px 0 16px 0;

  .title-no-order {
    color: var(--text);
    font-weight: 600;
  }

  .body-no-order {
    color: var(--text-secondary);
    line-height: 1.5;
  }
`;

export const OrderTabsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const OrderCardWrapper = styled.div`
  width: 100%;
  height: fit-content;
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  height: 200px;

  .loading-text {
    color: var(--text-secondary);
  }
`;

export const FilterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 0 4px;

  .filter-count {
    color: var(--text-secondary);
    font-size: 14px;
  }

  .sort-options {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-secondary);
    font-size: 14px;
  }
`;
