import styled from "styled-components";

interface WrapperProps {
  $variant: "success" | "warning" | "primary";
}

interface PersenProps {
  $isNegative: boolean;
}

interface MenuOpenProps {
  $isOpen: boolean;
}

export const Container = styled.div`
  width: 100%;
  min-height: 880px;
  background-color: var(--netral-100);
  padding: 20px 32px;
  display: flex;
  gap: 30px;

  @media (max-width: 767px) {
    flex-direction: column;
    padding: 16px;
    gap: 16px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    padding: 20px 24px;
    gap: 20px;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    padding: 20px 32px;
    gap: 24px;
  }

  @media (min-width: 1921px) {
    min-height: 880px;
    gap: 30px;
  }
`;

export const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8px;
`;

export const GreetingsContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 54px;

  @media (max-width: 1199px) {
    height: auto;
    gap: 8px;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    height: 64px;
  }
`;

export const Greetings = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 2px;

  .title {
    color: var(--text);
  }
  .body {
    color: var(--netral-600);
  }

  @media (max-width: 1199px) {
    width: 100%;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    width: 400px;
  }
`;

export const DateTime = styled.div`
  width: 104px;
  display: flex;
  flex-direction: column;
  align-items: end;

  .time {
    color: var(--text);
  }
  .date {
    color: var(--netral-600);
  }

  @media (max-width: 1199px) {
    align-items: start;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    width: 140px;
  }
`;

export const StatusContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 30px;
  margin-top: 13px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 16px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    flex-wrap: wrap;
    gap: 16px;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    gap: 20px;
  }
`;
export const TotalEarning = styled.div<MenuOpenProps>`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 200px;
  background-color: var(--background);
  border: none;
  border-radius: 12px;
  padding: 20px;

  @media (max-width: 767px) {
    width: 100%;
    height: 160px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: calc(50% - 8px);
    height: 180px;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    width: ${({ $isOpen }) => ($isOpen ? "100%" : "calc(33.33% - 14px)")};
    height: 220px;
  }

  @media (min-width: 1921px) {
    width: ${({ $isOpen }) => ($isOpen ? "350px" : "100%")};
    height: 254px;
  }
`;

export const InWaiting = styled.div<MenuOpenProps>`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 200px;
  background-color: var(--background);
  border: none;
  border-radius: 12px;
  padding: 20px;

  @media (max-width: 767px) {
    width: 100%;
    height: 160px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: calc(50% - 8px);
    height: 180px;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    width: ${({ $isOpen }) => ($isOpen ? "100%" : "calc(33.33% - 14px)")};
    height: 220px;
  }

  @media (min-width: 1921px) {
    width: ${({ $isOpen }) => ($isOpen ? "350px" : "100%")};
    height: 254px;
  }
`;

export const WaitingList = styled.div<MenuOpenProps>`
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 200px;
  background-color: var(--background);
  border: none;
  border-radius: 12px;
  padding: 20px;

  @media (max-width: 767px) {
    width: 100%;
    height: 160px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 100%;
    height: 180px;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    width: ${({ $isOpen }) => ($isOpen ? "100%" : "calc(33.33% - 14px)")};
    height: 220px;
  }

  @media (min-width: 1921px) {
    width: ${({ $isOpen }) => ($isOpen ? "350px" : "100%")};
    height: 254px;
  }
`;
export const WrapperContentStatus = styled.div`
  display: flex;
  justify-content: space-between;
  height: 48px;
  color: var(--text);
`;

export const IconWrapper = styled.div<WrapperProps>`
  width: 48px;
  height: 48px;
  padding: 12px;
  border: none;
  border-radius: 12px;
  background-color: ${({ $variant }) =>
    $variant === "success"
      ? "var(--success-status)"
      : $variant === "warning"
      ? "var(--warning-status)"
      : "var(--primary-icon-wrapper)"};
`;

export const Value = styled.div`
  margin: 12px 0;
  color: var(--text);
`;

export const PersenWrapper = styled.div<PersenProps>`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 2px;

  .persen {
    color: ${({ $isNegative }) =>
      $isNegative ? "var(--danger)" : "var(--success-persen)"};
  }
  .desc {
    color: var(--netral-600);
  }

  @media (min-width: 1440px) {
    margin-top: 20px;
  }

  @media (max-width: 1200px) {
    margin-top: 5px;
  }
`;

export const Dhises = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;

export const PopularDishes = styled.div`
  width: 100%;
  height: 510px;
  background-color: var(--background);
  padding: 24px 20px;
  border: none;
  border-radius: 16px;

  @media (min-width: 1440px) {
    height: 440px;
  }
`;

export const OutOfStock = styled.div`
  width: 100%;
  height: 510px;
  background-color: var(--background);
  padding: 24px 20px;
  border: none;
  border-radius: 16px;

  @media (max-width: 767px) {
    height: 350px;
    padding: 16px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    height: 400px;
    padding: 20px 16px;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    height: 480px;
    padding: 24px 20px;
  }

  @media (min-width: 1921px) {
    height: 440px;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-between;

  .title-card {
    color: var(--text);
  }

  .view-all {
    color: var(--primary);
    cursor: pointer;
  }
`;

export const ContentCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  color: var(--netral-600);
  /* margin-top: 180px; */
  margin-top: 24px;
`;

export const MenuHeader = styled.div<MenuOpenProps>`
  display: flex;
  align-items: center;
  justify-content: ${({$isOpen}) => ($isOpen ? "end" : "center")};
  padding: 0 4px;
`;

export const MenuToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--netral-200);
  }
`;

export const ContentRight = styled.div<MenuOpenProps>`
  width: ${({ $isOpen }) => ($isOpen ? "426px" : "60px")};
  height: ${({ $isOpen }) => ($isOpen ? "100%" : "867px")};
  background-color: var(--background);
  border: none;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: ${({ $isOpen }) => ($isOpen ? "end" : "center")};

  @media (max-width: 767px) {
    width: 100%;
    height: auto;
    min-height: 300px;
    align-items: stretch;
    padding: 16px;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: ${({ $isOpen }) => ($isOpen ? "100%" : "80px")};
    height: auto;
    min-height: 100px;
    align-items: stretch;
    padding: 20px;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    width: ${({ $isOpen }) => ($isOpen ? "850px" : "80px")};
    padding: 20px 24px;
    align-items: ${({ $isOpen }) => ($isOpen ? "stretch" : "center")};
  }

  @media (min-width: 1921px) {
    width: ${({ $isOpen }) => ($isOpen ? "100%" : "100px")};
    padding: 20px 40px 40px;
  }
`;

export const TabsContentRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Search = styled.div`
  width: 386px;
  height: 44px;
  background: var(--netral-100);
  border-radius: 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 0 12px;
  color: var(--text);
  box-shadow: var(--shadow-sm);
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 14px;

  @media (max-width: 1199px) {
    width: 100%;
    margin: 16px 0;
  }

  @media (min-width: 1200px) and (max-width: 1920px) {
    width: 100%;
    margin: 20px 0;
    max-width: 400px;
  }

  @media (min-width: 1921px) {
    width: 100%;
  }
`;

export const NoOrders = styled.div`
  width: 126px;
  height: 126px;
  border-radius: 100px;
  background-color: var(--secondary-light);
  display: flex;
  justify-content: center;
  margin-top: 81px;
  align-items: center;
`;

export const NoOrderText = styled.div`
  width: 266px;
  height: 74px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 24px;
  margin-bottom: 16px;

  .title-no-order {
    color: var(--text);
  }

  .body-no-order {
    color: var(--netral-600);
  }
`;
